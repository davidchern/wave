import * as Fluent from '@fluentui/react';
import React from 'react';
import { stylesheet } from 'typestyle';
import { B, bond, box, Rec, S } from './telesync';

export interface FileUpload {
  name: S
  label: S
  multiple: B
  tooltip: S
}

const
  css = stylesheet({
    fileInput: {
      marginBottom: '10px',
    },
  })

export const
  XFileUpload = bond(({ args, model: m, submit }: { args: Rec, model: FileUpload, submit: () => void }) => {
    const
      ref = React.createRef<HTMLInputElement>(),
      formSubmittedB = box(false),
      filePicked = box(false),
      percentComplete = box(0.0),
      upload = async () => {
        const fileInput = ref.current
        if (!fileInput) return
        const formData = new FormData(), files = fileInput.files
        if (!files) return // XXX validate
        formSubmittedB(true)
        for (let i = 0; i < files.length; i++) formData.append('files', files[i])
        try {
          const makeRequest = new Promise<XMLHttpRequest>(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/f/in");
            xhr.upload.onprogress = function (e) {
              percentComplete(e.loaded / e.total)
            }
            xhr.send(formData);
            xhr.onreadystatechange = function () {
              if (xhr.readyState !== this.DONE) return;
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr);
              } else {
                reject({
                  status: xhr.status,
                  statusText: xhr.statusText
                });
              }
            };
          });

          const res = await makeRequest
          const text = res.responseText
          const reply = JSON.parse(text)
          args[m.name] = reply.files
          submit()
        } catch (e) {
          console.error(e) // XXX handle properly
        }
      },
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => filePicked(e.target.value.length > 0),
      render = () => {
        const buttonText = formSubmittedB()
          ? "Uploading..."
          : m.label
        const uploadDescription = formSubmittedB() ? "Uploading: " + (percentComplete() * 100).toFixed(2) + "%" : null
        return (<div data-test={m.name}>
          <div>
            <input disabled={formSubmittedB()} ref={ref} className={css.fileInput} onChange={onChange} type='file' multiple={m.multiple} />
          </div>
          <div>
            <Fluent.ProgressIndicator
              data-test='progress' // TODO: Does not work.
              description={uploadDescription}
              percentComplete={percentComplete()}
              progressHidden={!formSubmittedB()}
            />
          </div>
          <div>
            <Fluent.PrimaryButton disabled={formSubmittedB() || !filePicked()} text={buttonText} onClick={upload} />
          </div>
        </div>)
      }

    return { render, formSubmittedB, percentComplete, filePicked }
  })
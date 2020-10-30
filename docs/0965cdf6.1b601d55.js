(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{290:function(n,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return _}));var t=a(0),r=a.n(t);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function c(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var p=r.a.createContext({}),u=function(n){var e=r.a.useContext(p),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},s=function(n){var e=u(n.components);return r.a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},f=r.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,i=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),s=u(a),f=t,_=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return a?r.a.createElement(_,o(o({ref:e},p),{},{components:a})):r.a.createElement(_,o({ref:e},p))}));function _(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=a.length,c=new Array(i);c[0]=f;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:t,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},302:function(n,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/dashboard-24aea705724fd29993c5508a401b3b3c.png"},58:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return o})),a.d(e,"rightToc",(function(){return l})),a.d(e,"default",(function(){return u}));var t=a(2),r=a(6),i=(a(0),a(290)),c={title:"Dashboard"},o={unversionedId:"examples/dashboard",id:"examples/dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Make a dashboard using a multitude of cards and update them live.",source:"@site/docs/examples/dashboard.md",slug:"/examples/dashboard",permalink:"/wave/docs/examples/dashboard",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/dashboard.md",version:"current",sidebar:"someSidebar",previous:{title:"Issue Tracker",permalink:"/wave/docs/examples/issue-tracker"},next:{title:"Stat / Small",permalink:"/wave/docs/examples/stat-small"}},l=[],p={rightToc:l};function u(n){var e=n.components,c=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,c,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Make a dashboard using a multitude of cards and update them live."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+a(302).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from faker import Faker\nimport time\nfrom h2o_wave import site, data, ui\nfrom synth import FakePercent, FakeCategoricalSeries\n\nfake = Faker()\n\nlight_theme_colors = '$red $pink $purple $violet $indigo $blue $azure $cyan $teal $mint $green $amber $orange $tangerine'.split()\ndark_theme_colors = '$red $pink $blue $azure $cyan $teal $mint $green $lime $yellow $amber $orange $tangerine'.split()\n\n_color_index = -1\ncolors = dark_theme_colors\n\n\ndef next_color():\n    global _color_index\n    _color_index += 1\n    return colors[_color_index % len(colors)]\n\n\n_curve_index = -1\ncurves = 'linear smooth step stepAfter stepBefore'.split()\n\n\ndef next_curve():\n    global _curve_index\n    _curve_index += 1\n    return curves[_curve_index % len(curves)]\n\n\ndef create_dashboard(update_freq=0.0):\n    page = site['/demo']\n\n    simples = []\n    for i in range(1, 7):\n        f = FakePercent()\n        val, pc = f.next()\n        c = page.add(f'a{i}', ui.small_stat_card(\n            box=f'{i} 1 1 1',\n            title=fake.cryptocurrency_name(),\n            value=f'${val:.2f}',\n        ))\n        simples.append((f, c))\n\n    simples_colored = []\n    for i in range(1, 7):\n        f = FakeCategoricalSeries()\n        cat, val, pc = f.next()\n        c = page.add(f'aa{i}', ui.small_series_stat_card(\n            box=f'{6 + i} 1 1 1',\n            title=fake.cryptocurrency_code(),\n            value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            data=dict(qux=val, quux=pc / 100),\n            plot_category='foo',\n            plot_value='qux',\n            plot_color=next_color(),\n            plot_data=data('foo qux', -15),\n            plot_zero_value=0,\n            plot_curve=next_curve(),\n        ))\n        simples_colored.append((f, c))\n\n    lines = []\n    for i in range(1, 13, 2):\n        f = FakeCategoricalSeries()\n        cat, val, pc = f.next()\n        c = page.add(f'b{i}', ui.wide_series_stat_card(\n            box=f'{i} 2 2 1',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n            data=dict(qux=val, quux=pc / 100),\n            plot_category='foo',\n            plot_value='qux',\n            plot_color=next_color(),\n            plot_data=data('foo qux', -15),\n            plot_zero_value=0,\n            plot_curve=next_curve(),\n        ))\n        lines.append((f, c))\n\n    bars = []\n    for i in range(1, 13, 2):\n        f = FakeCategoricalSeries()\n        cat, val, pc = f.next()\n        c = page.add(f'c{i}', ui.wide_series_stat_card(\n            box=f'{i} 3 2 1',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n            data=dict(qux=val, quux=pc),\n            plot_type='interval',\n            plot_category='foo',\n            plot_value='qux',\n            plot_color=next_color(),\n            plot_data=data('foo qux', -25),\n            plot_zero_value=0\n        ))\n        bars.append((f, c))\n\n    large_pcs = []\n    for i in range(1, 13):\n        f = FakePercent()\n        val, pc = f.next()\n        c = page.add(f'd{i}', ui.tall_gauge_stat_card(\n            box=f'{i} 4 1 2',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl foo minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl bar style=\"percent\" minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            plot_color=next_color(),\n            progress=pc,\n            data=dict(foo=val, bar=pc / 100),\n        ))\n        large_pcs.append((f, c))\n\n    large_lines = []\n    for i in range(1, 13):\n        f = FakeCategoricalSeries()\n        cat, val, pc = f.next()\n        c = page.add(f'e{i}', ui.tall_series_stat_card(\n            box=f'{i} 6 1 2',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n            data=dict(qux=val, quux=pc),\n            plot_type='area',\n            plot_category='foo',\n            plot_value='qux',\n            plot_color=next_color(),\n            plot_data=data('foo qux', -15),\n            plot_zero_value=0,\n            plot_curve=next_curve(),\n        ))\n        large_lines.append((f, c))\n\n    small_pcs = []\n    for i in range(1, 7, 2):\n        f = FakePercent()\n        val, pc = f.next()\n        c = page.add(f'f{i}', ui.wide_gauge_stat_card(\n            box=f'{i} 8 2 1',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl foo minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl bar style=\"percent\" minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            plot_color=next_color(),\n            progress=pc,\n            data=dict(foo=val, bar=pc / 100),\n        ))\n        small_pcs.append((f, c))\n\n    small_pbs = []\n    for i in range(7, 13, 2):\n        f = FakePercent()\n        val, pc = f.next()\n        c = page.add(f'f{i}', ui.wide_bar_stat_card(\n            box=f'{i} 8 2 1',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl foo minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl bar style=\"percent\" minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            plot_color=next_color(),\n            progress=pc,\n            data=dict(foo=val, bar=pc / 100),\n        ))\n        small_pbs.append((f, c))\n\n    large_cards = []\n    for i in range(1, 7, 2):\n        f = FakePercent()\n        val, pc = f.next()\n        c = page.add(f'g{i}', ui.large_stat_card(\n            box=f'{i} 9 2 2',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n            data=dict(qux=val, quux=pc / 100),\n            caption=' '.join(fake.sentences()),\n        ))\n        large_cards.append((f, c))\n\n    large_pbs = []\n    for i in range(7, 13, 2):\n        f = FakePercent()\n        val, pc = f.next()\n        c = page.add(f'g{i}', ui.large_bar_stat_card(\n            box=f'{i} 9 2 2',\n            title=fake.cryptocurrency_name(),\n            value='=${{intl foo minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            value_caption='This Month',\n            aux_value='={{intl bar style=\"percent\" minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value_caption='Previous Month',\n            plot_color=next_color(),\n            progress=pc,\n            data=dict(foo=val, bar=pc / 100),\n            caption=' '.join(fake.sentences(2)),\n        ))\n        large_pbs.append((f, c))\n\n    page.save()\n\n    while update_freq > 0:\n        time.sleep(update_freq)\n\n        for f, c in simples:\n            val, pc = f.next()\n            c.value = f'${val:.2f}',\n\n        for f, c in simples_colored:\n            cat, val, pc = f.next()\n            c.data.qux = val\n            c.data.quux = pc / 100\n            c.plot_data[-1] = [cat, val]\n\n        for f, c in lines:\n            cat, val, pc = f.next()\n            c.data.qux = val\n            c.data.quux = pc / 100\n            c.plot_data[-1] = [cat, val]\n\n        for f, c in bars:\n            cat, val, pc = f.next()\n            c.data.qux = val\n            c.data.quux = pc / 100\n            c.plot_data[-1] = [cat, val]\n\n        for f, c in large_lines:\n            cat, val, pc = f.next()\n            c.data.qux = val\n            c.data.quux = pc / 100\n            c.plot_data[-1] = [cat, val]\n\n        for f, c in large_pcs:\n            val, pc = f.next()\n            c.data.foo = val\n            c.data.bar = pc\n            c.progress = pc\n\n        for f, c in small_pcs:\n            val, pc = f.next()\n            c.data.foo = val\n            c.data.bar = pc\n            c.progress = pc\n\n        for f, c in small_pbs:\n            val, pc = f.next()\n            c.data.foo = val\n            c.data.bar = pc\n            c.progress = pc\n\n        for f, c in large_cards:\n            val, pc = f.next()\n            c.data.qux = val\n            c.data.quux = pc\n\n        for f, c in large_pbs:\n            val, pc = f.next()\n            c.data.foo = val\n            c.data.bar = pc\n            c.progress = pc\n\n        page.save()\n\n\ncreate_dashboard(update_freq=0.25)\n")))}u.isMDXComponent=!0}}]);
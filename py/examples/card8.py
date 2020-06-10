# Card8
# No description available.
# ---
from telesync import Site, ui, data
from faker import Faker
from synth import FakePercent, FakeCategoricalSeries
import time

site = Site()

page = site['/demo']

fake = Faker()
f = FakePercent()
val, pc = f.next()
c = page.add(f'example', ui.card8_card(
    box='1 1 2 1',
    title=fake.cryptocurrency_name(),
    value='=${{intl foo minimum_fraction_digits=2 maximum_fraction_digits=2}}',
    aux_value='={{intl bar style="unit" unit="percent" minimum_fraction_digits=2 maximum_fraction_digits=2}}',
    plot_color='$red',
    progress=pc,
    data=dict(foo=val, bar=pc * 100),
))
page.sync()

while True:
    time.sleep(1)
    val, pc = f.next()
    c.data.foo = val
    c.data.bar = pc * 100
    c.progress = pc
    page.sync()
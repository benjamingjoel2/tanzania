# Images needed

## Wrong photos replaced by illustrations

An audit (October 2026) found that many stock photos in `data/images.ts` did not show what their caption said, for example a penguin for Gombe Stream, a white tiger for Arusha, Maldives water villas for Zanzibar and a barbecue grill for the Mara River crossing. Those slots now show the site's own illustrated artwork (flagged as a placeholder in the image registry) until a correct photo is sourced. Searching for and checking replacement photos was not possible from the build environment, so each one is listed here.

| Image key | Should show | Used in | What to source |
| --- | --- | --- | --- |
| `kilimanjaroSummit` | climbers near Uhuru Peak | `app/kilimanjaro/[route]/page.tsx` `components/home/Pillars.tsx` `data/experiences.ts` `data/home.ts` `data/kilimanjaro.ts` `data/climbs.ts` `data/planner.ts` | A location-verified photo of climbers near Uhuru Peak (its Unsplash page location matches, or Creative Commons with credit) |
| `ngorongoro` | the Ngorongoro Crater | `data/destinations.ts` | A location-verified photo of the Ngorongoro Crater (its Unsplash page location matches, or Creative Commons with credit) |
| `tarangire` | elephants among baobabs in Tarangire | `data/destinations.ts` `data/pages.ts` `data/safaris.ts` | A location-verified photo of elephants among baobabs in Tarangire (its Unsplash page location matches, or Creative Commons with credit) |
| `manyara` | flamingos on Lake Manyara | `data/destinations.ts` | A location-verified photo of flamingos on Lake Manyara (its Unsplash page location matches, or Creative Commons with credit) |
| `arusha` | the foothills of Mount Meru near Arusha | `data/destinations.ts` | A location-verified photo of the foothills of Mount Meru near Arusha (its Unsplash page location matches, or Creative Commons with credit) |
| `ruaha` | Ruaha National Park | `data/destinations.ts` `data/safaris.ts` `data/planner.ts` | A location-verified photo of Ruaha National Park (its Unsplash page location matches, or Creative Commons with credit) |
| `nyerere` | a boat safari on the Rufiji River | `data/destinations.ts` `data/experiences.ts` | A location-verified photo of a boat safari on the Rufiji River (its Unsplash page location matches, or Creative Commons with credit) |
| `mahale` | chimpanzees in the Mahale Mountains | `data/destinations.ts` `data/experiences.ts` `data/safaris.ts` `data/planner.ts` | A location-verified photo of chimpanzees in the Mahale Mountains (its Unsplash page location matches, or Creative Commons with credit) |
| `gombe` | Gombe Stream on Lake Tanganyika | `data/destinations.ts` | A location-verified photo of Gombe Stream on Lake Tanganyika (its Unsplash page location matches, or Creative Commons with credit) |
| `eyasi` | Lake Eyasi | `data/destinations.ts` | A location-verified photo of Lake Eyasi (its Unsplash page location matches, or Creative Commons with credit) |
| `mafia` | whale sharks off Mafia Island | `data/destinations.ts` | A location-verified photo of whale sharks off Mafia Island (its Unsplash page location matches, or Creative Commons with credit) |
| `pemba` | a dhow off Pemba Island | `data/destinations.ts` | A location-verified photo of a dhow off Pemba Island (its Unsplash page location matches, or Creative Commons with credit) |
| `zanzibarBeach` | a Zanzibar beach | `components/home/Pillars.tsx` `data/destinations.ts` `data/experiences.ts` `data/safaris.ts` `data/zanzibar.ts` `data/planner.ts` | A location-verified photo of a Zanzibar beach (its Unsplash page location matches, or Creative Commons with credit) |
| `stoneTown` | a carved door in Stone Town | `data/zanzibar.ts` `data/planner.ts` | A location-verified photo of a carved door in Stone Town (its Unsplash page location matches, or Creative Commons with credit) |
| `zanzibarDhow` | a dhow off Zanzibar | `data/home.ts` `data/zanzibar.ts` `data/posts.ts` | A location-verified photo of a dhow off Zanzibar (its Unsplash page location matches, or Creative Commons with credit) |
| `migration` | the Great Migration | `app/blog/page.tsx` `data/experiences.ts` `data/safaris.ts` `data/planner.ts` `data/posts.ts` | A location-verified photo of the Great Migration (its Unsplash page location matches, or Creative Commons with credit) |
| `riverCrossing` | wildebeest crossing the Mara River | `data/safaris.ts` | A location-verified photo of wildebeest crossing the Mara River (its Unsplash page location matches, or Creative Commons with credit) |
| `walking` | a walking safari | `data/experiences.ts` | A location-verified photo of a walking safari (its Unsplash page location matches, or Creative Commons with credit) |
| `maasai` | a Maasai village | `data/experiences.ts` `data/pages.ts` | A location-verified photo of a Maasai village (its Unsplash page location matches, or Creative Commons with credit) |
| `honeymoon` | a Zanzibar honeymoon villa | `data/experiences.ts` `data/zanzibar.ts` | A location-verified photo of a Zanzibar honeymoon villa (its Unsplash page location matches, or Creative Commons with credit) |
| `family` | a family on safari | `data/experiences.ts` `data/safaris.ts` | A location-verified photo of a family on safari (its Unsplash page location matches, or Creative Commons with credit) |
| `meru` | Mount Meru | `data/experiences.ts` | A location-verified photo of Mount Meru (its Unsplash page location matches, or Creative Commons with credit) |
| `tentedCamp` | a tented safari camp | `app/stays/page.tsx` `data/stays.ts` | A location-verified photo of a tented safari camp (its Unsplash page location matches, or Creative Commons with credit) |
| `beachVilla` | a Zanzibar beach villa | `data/stays.ts` `data/zanzibar.ts` | A location-verified photo of a Zanzibar beach villa (its Unsplash page location matches, or Creative Commons with credit) |
| `lodgeDeck` | a lodge deck overlooking a river | `data/stays.ts` `data/pages.ts` | A location-verified photo of a lodge deck overlooking a river (its Unsplash page location matches, or Creative Commons with credit) |
| `specialist` | a travel specialist planning a route | `app/contact/page.tsx` `data/home.ts` `data/planner.ts` | A location-verified photo of a travel specialist planning a route (its Unsplash page location matches, or Creative Commons with credit) |
| `guide` | a safari guide with binoculars | `app/contact/page.tsx` `app/faq/page.tsx` `data/home.ts` | A location-verified photo of a safari guide with binoculars (its Unsplash page location matches, or Creative Commons with credit) |

## Photos kept, still to verify

The remaining Unsplash photos show plausible subjects (a leopard, a cheetah, zebra, hikers, Kilimanjaro, lodge interiors). Their alt text has been corrected to describe what each photo actually shows, but their locations have not been checked. Before launch, confirm each one on its Unsplash page, or replace it with your own photography.

## Named venues

No real hotel, lodge, restaurant or café is named on the site. The stays in `data/stays.ts` are fictional sample properties, labelled as placeholders on their pages. Mnemba, Matemwe, Forodhani and Lamai are places, not venues. When real partner camps are added, each must show that real property, using images the venue allows (its media kit or press page with terms that allow use by travel partners).

# Images needed

## Illustrations replaced with real photos (November 2026)

Every slot that showed the site's drawn artwork now shows a real photograph, and the drawn fallback is gone: `SmartImage` shows a plain neutral block if a photo ever fails to load, and `public/placeholders/` has been deleted. Commons photos are downloaded into `public/photos` (author and licence for each in `public/photos/CREDITS.md`); Unsplash photos are referenced by id. Where no photo of the exact subject was found, the nearest true subject is used and the alt text says what the photo shows.

| Done | Image key | Was meant to show | Photo now used | Nearest-match note |
| --- | --- | --- | --- | --- |
| [x] | `kilimanjaroSummit` | climbers near Uhuru Peak | Unsplash `photo-1611961547440-bde7c756990f` (location: Kilimanjaro) |  |
| [x] | `ngorongoro` | the Ngorongoro Crater | Unsplash `photo-1745885979468-44a855f8a5fa` (location: Ngorongoro Crater) |  |
| [x] | `tarangire` | elephants among baobabs in Tarangire | Unsplash `photo-1728238054897-05023133fe90` (location: Tarangire National Park) | Elephants crossing the Tarangire River; no baobab in frame |
| [x] | `manyara` | flamingos on Lake Manyara | Unsplash `photo-1612374300229-5c15f80cbf57` (location: Lake Manyara) | An elephant in the Manyara forest, not flamingos |
| [x] | `arusha` | the foothills of Mount Meru near Arusha | Commons `arusha-mount-meru.jpg` |  |
| [x] | `ruaha` | Ruaha National Park | Unsplash `photo-1737363918238-58711a4c8df2` (location: Ruaha) |  |
| [x] | `nyerere` | a boat safari on the Rufiji River | Commons `rufiji-river.jpg` | The Rufiji River itself, no boat in frame |
| [x] | `mahale` | chimpanzees in the Mahale Mountains | Commons `mahale-chimpanzees.jpg` |  |
| [x] | `gombe` | Gombe Stream on Lake Tanganyika | Commons `gombe-lake-tanganyika.jpg` |  |
| [x] | `eyasi` | Lake Eyasi | Commons `lake-eyasi-pelicans.jpg` |  |
| [x] | `mafia` | whale sharks off Mafia Island | Commons `mafia-island-chole.jpg` | A beach on Chole, Mafia; no whale-shark photo with a usable licence was found |
| [x] | `pemba` | a dhow off Pemba Island | Commons `pemba-chake-chake.jpg` | Pemba's mangrove coast at Chake-Chake; no Pemba dhow photo was found |
| [x] | `zanzibarBeach` | a Zanzibar beach | Commons `zanzibar-beach.jpg` |  |
| [x] | `stoneTown` | a carved door in Stone Town | Commons `stone-town-door.jpg` |  |
| [x] | `zanzibarDhow` | a dhow off Zanzibar | Commons `zanzibar-dhow.jpg` |  |
| [x] | `migration` | the Great Migration | Commons `serengeti-migration.jpg` |  |
| [x] | `riverCrossing` | wildebeest crossing the Mara River | Commons `mara-river-crossing.jpg` |  |
| [x] | `walking` | a walking safari | Commons `katavi-walking-safari.jpg` (Katavi National Park) |  |
| [x] | `maasai` | a Maasai village | Commons `ngorongoro-maasai-boma.jpg` |  |
| [x] | `honeymoon` | a Zanzibar honeymoon villa | Unsplash `photo-1790008230759-754e4776866a` ("Beach of Zanzibar") | A Zanzibar beach with thatched shelters, not a named villa |
| [x] | `family` | a family on safari | Unsplash `photo-1723643750330-c868b56af36f` (Serengeti) | Guests at a Serengeti sundowner |
| [x] | `meru` | Mount Meru | Commons `mount-meru-caldera.jpg` |  |
| [x] | `tentedCamp` | a tented safari camp | Commons `serengeti-tented-camp.jpg` | Thatched buildings of a real camp near the Serengeti (not named on the site); no tents in frame |
| [x] | `beachVilla` | a Zanzibar beach villa | Commons `zanzibar-beach-shelter.jpg` | A thatched beach shelter on Zanzibar, not a villa |
| [x] | `lodgeDeck` | a lodge deck overlooking a river | Commons `serengeti-camp-deck.jpg` | A camp deck over the Serengeti plains, not a river |
| [x] | `specialist` | a travel specialist planning a route | Unsplash `photo-1499591934245-40b55745b905` | A route being planned on a paper map |
| [x] | `guide` | a safari guide with binoculars | Unsplash `photo-1779388762527-0d4c5d8f4a92` (Serengeti gateway) | Two travellers with their vehicle at a Serengeti gate |

## Photos kept, still to verify

The remaining Unsplash photos show plausible subjects (a leopard, a cheetah, zebra, hikers, Kilimanjaro, lodge interiors). Their alt text has been corrected to describe what each photo actually shows, but their locations have not been checked. Before launch, confirm each one on its Unsplash page, or replace it with your own photography.

## Named venues

No real hotel, lodge, restaurant or café is named on the site. The stays in `data/stays.ts` are fictional sample properties; each stay page says it describes the kind of camp used there and that the specialist confirms the exact property. Mnemba, Matemwe, Forodhani and Lamai are places, not venues. When real partner camps are added, each must show that real property, using images the venue allows (its media kit or press page with terms that allow use by travel partners).

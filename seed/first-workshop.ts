import { PrismaClient, Workshop } from '@prisma/client';

const prisma = new PrismaClient()






const chapters = {

	create: [
		{
			title: 'Úvod: Svět (na) internetu',
			media: 'https://www.youtube.com/watch?v=3E7hkPZ-HTk',
			description: '',
			questions: {
				create: [
					{
						text: "Prohlížeč je:",
						answers: {
							create: [
								{
									text: "aplikace, která nám zajišťuje přístup na internet (Google Chrome, Internet Explorer, Mozilla Firefox);",
									correct: true
								},
								{
									text: "webová stránka, do které zadáváme dotazy (Google.com, Seznam.cz);",
								},
								{
									text: "speciální rozhraní, ve kterém vývojáři tvoří webové stránky a aplikace."
								}
							]
						}
					},
					{
						text: "Servery jsou nutné pro:",
						answers: {
							create: [
								{
									text: "jakoukoliv komunikaci;",
								},
								{
									text: "všechny aplikace a programy, které jsou připojené k internetu;",
									correct: true
								},
								{
									text: "pouze pro vlastníky e-shopů."
								}
							]
						}
					},
					{
						text: "V roce 2000 jsme mohli využívat:",
						answers: {
							create: [
								{
									text: "Twitter,",
								},
								{
									text: "YouTube,",
								},
								{
									text: "Facebook,"
								},
								{
									text: "nic z uvedených.",
									correct: true,
								}
							]
						}
					},
					{
						text: "Internet chápeme jako disruptivní inovaci. Jedná se totiž:",
						answers: {
							create: [
								{
									text: "o radikální změnu technologie, která svými možnostmi převyšuje a vytlačuje stávající technologie;",
									correct: true,
								},
								{
									text: "o technologii, která nás neustále vyrušuje;",
								},
								{
									text: "o novou technologii, která má potenciál zapříčinit revoluci v každém státě. "
								},
							]
						}
					},
					{
						text: "“Internet vypadá vizuálně pro všechny stejně, jako pro mě. ” Toto tvrzení je:",
						answers: {
							create: [
								{
									text: "správné,",
								},
								{
									text: "nesprávné.",
									correct: true
								},
							]
						}
					},
					{
						text: "Co máme na mysli tím, že se “Internet posunul od sdílení ke komerci”? Máme tím na mysli, že:",
						answers: {
							create: [
								{
									text: "původní funkcí internetu bylo sdílení informací mezi domácnostmi a poštovními systémy. Komercializace se rozmohla až v 80. letech z důvodu nutnosti zefektivnění poštovní rozesílky;",
								},
								{
									text: "původní funkcí internetu bylo sdílení informací mezi univerzitami a obrannými systémy. Komercializace se rozmohla až v 90. letech především z důvodu nutnosti rozvoje infrastruktury internetu skrze napojení se na infrastrukturu telefonní;",
									correct: true
								},
								{
									text: "původní funkcí internetu bylo sdílení informací mezi státy a organizacemi. Komercializace se rozmohla až po roce 2004, kdy byl založen Facebook."
								}
							]
						}
					},
					{
						text: "Jak si lze představit aplikace:",
						answers: {
							create: [
								{
									text: "jako zkratky, expresní vlaky, které přeskakují potřebu vyhledávače a dostanou nás rovnou na místo, kam potřebujeme;",
									correct: true
								},
								{
									text: "jako chytrá okna, která slouží jako reklamní poutač společnosti v našem telefonu;",
								},
								{
									text: "jako starý druh vyhledávače, který byl nahrazen moderními, rychlejšími vyhledávači, jako je např. Google Chrome aj."
								}
							]
						}
					},
					{
						text: "Síťový předchůdce internetu se nazýval:",
						answers: {
							create: [
								{
									text: "ARPANET,",
									correct: true
								},
								{
									text: "DARTANET,",
								},
								{
									text: "TRADANET."
								}
							]
						}
					},
					{
						text: "Technologie:",
						answers: {
							create: [
								{
									text: "mění trh práce,",
								},
								{
									text: "usnadňují komunikaci,",
								},
								{
									text: "umožňují změny způsobů seznamování,"
								},
								{
									text: "všechny odpovědi jsou správně.",
									correct: true
								}
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 1: Algoritmy, AI a platformy',
			media: 'https://youtu.be/h1kw2KLZ2uo',
			description: '',
			questions: {
				create: [
					{
						text: "Algoritmy jsou:",
						answers: {
							create: [
								{
									text: "přesně definované sledy kroků, které vedou k předem stanovenému cíli;",
									correct: true
								},
								{
									text: "zkratky pro našeptávače a odkazy,",
								},
								{
									text: "specializované typy vyhledávačů."
								}
							]
						}
					},
					{
						text: "Algoritmy se nejvíce podobají:",
						answers: {
							create: [
								{
									text: "návodu na sestavení nábytku,",
								},
								{
									text: "popisu obrázku,",
									correct: true
								},
								{
									text: "vysvětlení významu dopravních značek,"
								},
								{
									text: "ani jedné z možností – představují naprosto jiný, mnohem složitější princip."
								}
							]
						}
					},
					{
						text: "Umělá inteligence nemá potenciál nahradit člověka také protože:",
						answers: {
							create: [
								{
									text: "se často porouchá a dělá chyby,",
								},
								{
									text: "nedokáže spolehlivě rozeznat kontext,",
									correct: true
								},
								{
									text: "je nepřesná a nevysvětlitená."
								},
							]
						}
					},
					{
						text: "Umělá inteligence:",
						answers: {
							create: [
								{
									text: "zastává úkoly “složitějšího algoritmu”, zefektivňuje úsilí a každý její krok v procesu je možné zmapovat;",
								},
								{
									text: "nezastává úlohu “složitějšího algoritmu” a žádný její krok v procesu nelze zmapovat;",
								},
								{
									text: "zastává úlohu “složitějšího algoritmu”, ale ne všechny její kroky je možné zmapovat.",
									correct: true
								},
							]
						}
					},
					{
						text: "Umělá inteligence:",
						answers: {
							create: [
								{
									text: "má vždy hmatatelnou podobu,",
								},
								{
									text: "nemá nikdy hmatatelnou podobu,",
								},
								{
									text: "může a nemusí mít hmatatelnou podobu.",
									correct: true
								}
							]
						}
					},
					{
						text: "Termín black box neboli černá skříňka v souvislosti s umělou inteligencí znamená:",
						answers: {
							create: [
								{
									text: "hardwarová součást, kterou v sobě má zabudovanou každý robot;",
								},
								{
									text: "nic, černé skříňky mají jen letadla;",
								},
								{
									text: "nemožnost zkontrolovat kroky, jakými došla umělá inteligence k nastavenému cíli.",
									correct: true
								}
							]
						}
					},
					{
						text: "Mezi online platformy patří všechny uvedené v možnosti:",
						answers: {
							create: [
								{
									text: "Netflix, HBO Go, Youtube, galerijní prostor, e-mailová schránka;",

								},
								{
									text: "Hospodářské noviny, e-shop,  Youtube, Amazon Prime;",
								},
								{
									text: "Netflix, Aukro, HBO Go, Reddit.",
									correct: true
								}
							]
						}
					},
					{
						text: "Online platforma jako pojem",
						answers: {
							create: [
								{
									text: "popisuje prostředí, kde se setkává více skupin uživatelů;",
									correct: true
								},
								{
									text: "má jasně danou a všemi přijímanou definici;",
								},
								{
									text: "popisuje vždy nějak tématicky zaměřené online prostředí."
								}
							]
						}
					},
					{
						text: "Většina sociálních médií může být pro uživatele zdarma, protože:",
						answers: {
							create: [
								{
									text: "je platí Google, Microsoft a další velké společnosti;",
								},
								{
									text: "díky uživatelům vydělávají –⁠ skrze sběr dat a prodávání inzerčního prostoru;",
									correct: true
								},
								{
									text: "jsou zdarma jen zpočátku jejich fungování, později jsou všechny nuceny přejít na placené verze."
								},
							]
						}
					},
					{
						text: "Cookie je ve světě internetu:",
						answers: {
							create: [
								{
									text: "malé množství informací o uživateli v podobě dat, které server pošle prohlížeči, jenž je následně uloží na počítač uživatele;",
									correct: true
								},
								{
									text: "vyjádření, že uživatel chápe funkce webových stránek, které musí odesílat, ale které zároveň nemá žádné využití pro provozovatele webu;",

								},
								{
									text: "charitativní činnost, jejímž zakliknutím přimějeme majitele webových stránek, aby poslal sušenky dětem do rozvojových zemí."
								},
							]
						}
					},
					{
						text: "E-shopy na nás mohou cílit reklamu s konkrétními produkty, které jsme si v minulosti prohlíželi, díky:",
						answers: {
							create: [
								{
									text: "odposlouchávání,",
								},
								{
									text: "remarketingu,",
									correct: true
								},
								{
									text: "náhodě."
								},
							]
						}
					},
					{
						text: "Sdílená ekonomika zažila vzestup díky:",
						answers: {
							create: [
								{
									text: "online platformám, které umožňují ekonomické transakce mezi jejich uživateli;",
									correct: true
								},
								{
									text: "hromadným chatům sousedů, zpravidla na WhatsAppu nebo Messengeru; ",
								},
								{
									text: "lidem v nouzi, kteří si nemohou dovolit určité produkty. "
								},
							]
						}
					},
					{
						text: "Na bezpečné služby sdílené ekonomiky mají nejmenší vliv:",
						answers: {
							create: [
								{
									text: "státy, které vytváří nové regulace,",
									correct: true
								},
								{
									text: "online reputace uživatelů,",
								},
								{
									text: "samotné platformy. "
								},
							]
						}
					},
					{
						text: "Digitální nomád je člověk, který:",
						answers: {
							create: [
								{
									text: "pracuje z domu díky digitálním technologiím,",
								},
								{
									text: "se odstěhoval do zahraničí, aby získal práci v nadnárodní firmě,",
								},
								{
									text: "pracuje online a zároveň cestuje - nemá pevně danou lokaci pro výkon své práce.",
									correct: true
								},
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 2: Ekonomika pozornosti a role dat',
			media: 'https://youtu.be/a5BafCkoVkM',
			description: '',
			questions: {
				create: [
					{
						text: "Ekonomika pozornosti, attention economy:",
						answers: {
							create: [
								{
									text: "je specifická forma ekonomiky, která prosperuje díky nepřímým transakcím;",
									correct: true
								},
								{
									text: "je princip konzumace informací;",
								},
								{
									text: "je důsledkem dostatku pozornosti ve světě."
								}
							]
						}
					},
					{
						text: "Sociální média a jiné platformy:",
						answers: {
							create: [
								{
									text: "se snaží udržet stejné funkcionality a obsah, aby snáze udržely naši pozornost;",
								},
								{
									text: "rozšiřují a optimalizují své funkce, aby udržely naši pozornost;",
									correct: true
								},
								{
									text: "vizuálně mění své prostředí, ale funkcionalita zůstává totožná, aby udržely naši pozornost."
								},
							]
						}
					},
					{
						text: "Data generovaná uživateli jsou sbírána, měřena a tříděna. Na základě toho nám platformy mohou:",
						answers: {
							create: [
								{
									text: "nabídnout specifický,  personalizovaný obsah a zacílit lépe nejen svá reklamní sdělení;",
								},
								{
									text: "účtovat vyšší poplatky;",
									correct: true
								},
								{
									text: "nabídnout specifický, personalizovaný obsah a lépe distribuovat aktualizace."
								},
							]
						}
					},
					{
						text: "Individuálně-masová média:",
						answers: {
							create: [
								{
									text: "servírují obsah ušitý uživateli na míru jen proto, že o tom částečně rozhodly i tisíce lidí jemu v chování podobných;",
									correct: true
								},
								{
									text: "servírují obsah masových médií pouze na základě jedinečných přání a rozhodnutí individua;",
								},
								{
									text: "servírují stejný obsah dle geolokační oblasti, ve které se jednotlivec nachází.",
								},
							]
						}
					},
					{
						text: "Influenceři jsou:",
						answers: {
							create: [
								{
									text: "uživatelé s vlivnou online personou;",
									correct: true
								},
								{
									text: "uživatelé, kteří se zabývají kosmetikou;",
								},
								{
									text: "pouze slavní herci, zpěváci a moderátoři.",
								}
							]
						}
					},
					{
						text: "Big Data jsou využívána:",
						answers: {
							create: [
								{
									text: "pouze policií a na vyžádání v rámci kriminálního vyšetřování, ",
								},
								{
									text: "oprávněnými subjekty pro mnoho účelů –⁠ od marketingu po optimalizaci výroby,",
									correct: true
								},
								{
									text: "kýmkoliv pro cokoliv –⁠ zejména za účely zjišťování osobních dat.",
								}
							]
						}
					},
					{
						text: "Digitální persony se tvoří:",
						answers: {
							create: [
								{
									text: "jen uživatelům sociálních médií,",

								},
								{
									text: "jen uživatelům sociálních médií a jejich aplikací,",
								},
								{
									text: "téměř všem, kteří se pohybují na internetu.",
									correct: true
								}
							]
						}
					},
					{
						text: "Sociální síť je:",
						answers: {
							create: [
								{
									text: "platforma pro propojení lidí online,",
								},
								{
									text: "síť vztahů a propojení mezi lidmi,",
									correct: true
								},
								{
									text: "způsob navazování vztahů online."
								}
							]
						}
					},
					{
						text: "Z těchto je pro sociální média nejzásadnější:",
						answers: {
							create: [
								{
									text: "nalákat a udržet si uživatele,",
									correct: true
								},
								{
									text: "navazovat partnerství s aplikacemi,",
								},
								{
									text: "klást důraz na video materiál."
								},
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 3: Mechanismy vlivu a výběru',
			media: 'https://youtu.be/6D2sxOyXiwg',
			description: '',
			questions: {
				create: [
					{
						text: "Cílem platforem je:",
						answers: {
							create: [
								{
									text: "udržet naši pozornost po přesně stanovenou dobu,",
								},
								{
									text: "udržet naši pozornost po maximální dobu,",
									correct: true
								},
								{
									text: "nesnažit se udržet naši pozornost, ale přesměrovat nás na jinou stránku."
								}
							]
						}
					},
					{
						text: "Watch time, engagement:",
						answers: {
							create: [
								{
									text: "jsou americké platformy, které se zabývají streamingem,",
								},
								{
									text: "reflektují míru interakce s obsahem,",
									correct: true
								},
								{
									text: "jsou metriky, které zobrazují čas strávený na platformě,"
								},
								{
									text: "nejsou popsány v žádných z těchto možností."
								},
							]
						}
					},
					{
						text: "Online prostředí:",
						answers: {
							create: [
								{
									text: "působí a formuje na naše myšlení, chování stejně jako jakékoliv informace offline;",
									correct: true
								},
								{
									text: "je jasně odděleno od našich životů, a tak nikdy neovlivňuje naše myšlení, ale vždy ovlivňuje naše chování v offline prostředí;",
								},
								{
									text: "někdy ovlivňuje naše chování, ale rozhodně nemá vliv na naše přemýšlení."
								},
							]
						}
					},
					{
						text: "Afordance na sociálních médiích:",
						answers: {
							create: [
								{
									text: "dovolují vlastní přizpůsobení a personalizaci platformy,",
								},
								{
									text: "jsou zabudované do online prostředí, a tím pádem jsou neměnné uživatelem,",
									correct: true
								},
								{
									text: "jsou vytvářeny na základě otevřeného hlasování uživatelů. ",
								},
							]
						}
					},
					{
						text: "General Data Protection Regulation, česky obecná nařízení o ochraně osobních údajů známá pod zkratkou GDPR, je regulace vydaná:",
						answers: {
							create: [
								{
									text: "Ministerstvem vnitra ČR za účelem kontroly jak uživatelů, tak vlastníků online platforem, ",
								},
								{
									text: "OSN za účelem ochrany dat občanů členských zemí,",
								},
								{
									text: "EU za účelem ochrany soukromí občanů členských zemí.",
									correct: true
								}
							]
						}
					},
					{
						text: "Aplikace:",
						answers: {
							create: [
								{
									text: "o nás sbírají data po souhlasu s podmínkami užívání a zásad o ochraně osobních údajů,",
									correct: true
								},
								{
									text: "nemají přesně stanovené podmínky užívání a zásady o ochraně osobních údajů, ",
								},
								{
									text: "mají stejné podmínky užívání a zásady o ochraně osobních údajů, se kterými už jsme souhlasili na Facebooku. ",
								}
							]
						}
					},
					{
						text: "Architektura volby na internetu:",
						answers: {
							create: [
								{
									text: "navádí uživatele k provedení určitých voleb na online platformách,",
									correct: true
								},
								{
									text: "je pseudonym webových stránek pro příznivce architektury,",
								},
								{
									text: "je speciální doplněk prohlížeče pro nerozhodné uživatele.",
								}
							]
						}
					},
					{
						text: "Design systému jakéhokoliv technologického řešení:",
						answers: {
							create: [
								{
									text: "nemá žádný vliv či kontrolu nad rozhodováním člověka,",
								},
								{
									text: "neví se, jestli má vliv či kontrolu nad rozhodováním člověka,",
								},
								{
									text: "má vliv i kontrolu nad rozhodováním člověka a je vždy nutné si uvědomit, kdo nebo co stojí za daným řešením.",
									correct: true
								}
							]
						}
					},
					{
						text: "Algoritmická předpojatost neboli bias značí:",
						answers: {
							create: [
								{
									text: "neomylnou inteligenci strojů,",
								},
								{
									text: "příklad “strojové hlouposti inteligentních strojů”, který vede ke zkreslené představě o podobě uživatele,",
									correct: true
								},
								{
									text: "fenomén “bias” popsaný již starými řeckými bájemi a pověstmi."
								},
							]
						}
					},
					{
						text: "Misreprezentace může mít i socioekonomické důsledky. Proč?",
						answers: {
							create: [
								{
									text: "protože nabídka rozdílných možností a voleb může vést k různým možnostem ve vývoji uživatele,",
									correct: true
								},
								{
									text: "protože je pak pro určité uživatele pohyb na internetu finančně nákladnější,",
								},
								{
									text: "Nemůže –⁠ misreprezentace ve skutečnosti napomáhá sociální rovnosti."
								},
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 4: Informace a kontrola',
			media: ' https://youtu.be/FgJ35gjD-Jc',
			description: '',
			questions: {
				create: [
					{
						text: "V současné době platí, že:",
						answers: {
							create: [
								{
									text: "i účast v občanské společnosti je komerčním činem, jelikož zprostředkovatel a garant této interakce je komerční, a tak z těchto interakcí těží;",
									correct: true
								},
								{
									text: "účast v občanské společnosti není komerčním činem, jelikož zprostředkovatel a garant této interakce je sice komerční, ale z těchto interakcí nikdy netěží;"
								},
								{
									text: "účast v občanské společnosti za žádných okolností není monetizovatelná;",
								},
								{
									text: "ani jedno z těchto tvrzení neplatí."
								}
							]
						}
					},
					{
						text: "V online prostoru se díky demokratické debatě:",
						answers: {
							create: [
								{
									text: "tvoří hnutí, která nemají pouze funkci neorganizovaného kalibru, ale která jsou i ideově propojená;",
									correct: true
								},
								{
									text: "tvoří hnutí, která mají pouze funkci organizovaného hnutí;",
								},
								{
									text: "netvoří žádná hnutí."
								},
							]
						}
					},
					{
						text: "Online platformy disponují přidanou hodnotou jako  je:",
						answers: {
							create: [
								{
									text: "amplifikace zásahu a umožnění volné formy vedení komunikace mezi zúčastněnými,",
								},
								{
									text: "amplifikace zásahu, rychlá komunikace a anonymní transakce,",
								},
								{
									text: "amplifikace zásahu, rychlá komunikace a stanovení řádu těchto interakcí.",
									correct: true
								},
							]
						}
					},
					{
						text: "Nepravdivé nebo nepřesné informace, které jsou šířeny bez jakéhokoliv strategického úmyslu se nazývají:",
						answers: {
							create: [
								{
									text: "misinformace,",
									correct: true
								},
								{
									text: "dezinformace,",
								},
								{
									text: "deep fake,",
								},
								{
									text: "fake news.",
								},
							]
						}
					},
					{
						text: "Měkké techniky projevu moci jsou na internetu umožněny na základě využívání praktik založených primárně na:",
						answers: {
							create: [
								{
									text: "informacích,",
									correct: true
								},
								{
									text: "speciálních aplikacích,",
								},
								{
									text: "dark webu,",
								},
								{
									text: "kombinací všech možností.",
								}
							]
						}
					},
					{
						text: "Kybernetická propaganda:",
						answers: {
							create: [
								{
									text: "není tolik rozšířená, protože se jedná o nový způsob propagandy;",
								},
								{
									text: "se neustále mění a přizpůsobuje se technologickým inovacím;",
									correct: true
								},
								{
									text: "se týká pouze zemí s totalitními režimy.",
								}
							]
						}
					},
					{
						text: "Boti jsou",
						answers: {
							create: [
								{
									text: "programy, které opakovaně vykonávají určité činnosti,",
									correct: true
								},
								{
									text: "účty na sociálních médiích, které trollí,",
								},
								{
									text: "roboti, kteří jsou užíváni ve výrobě a skladech.",
								}
							]
						}
					},
					{
						text: "S boty se můžeme setkat:",
						answers: {
							create: [
								{
									text: "na sociálních médiích, v e-shopech nebo na webových stránkách,",
									correct: true
								},
								{
									text: "jen v rámci propagandy na sociálních médií,",
								},
								{
									text: "každý den i v našich domácnostech (myčka, sušička, pračka).",
								}
							]
						}
					},
					{
						text: "Političtí boti:",
						answers: {
							create: [
								{
									text: "jsou naprogramovaní k jasnému zastávání určitého stanoviska;",
									correct: true
								},
								{
									text: "mění názory podle toho, v jaké diskuzi se zrovna ocitnou;",
								},
								{
									text: "jsou názorově velmi neurčití, jen uživatele podporují v diskuzi. "
								},
							]
						}
					},
					{
						text: "Hybridní války charakterizují:",
						answers: {
							create: [
								{
									text: "fyzické napadení datových center vybrané země vojáky jiné země;",
									correct: true
								},
								{
									text: "kromě tradičního konfliktu také dezinformační kampaně, kybernetickou propagandu a psychologické operace;",
								},
								{
									text: "konflikty, ve kterých jsou kromě lidských vojáků využíváni také robotičtí vojáci."
								},
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 5: Cenzura a kyberprostor',
			media: ' https://youtu.be/LfJQfJhmp2g',
			description: '',
			questions: {
				create: [
					{
						text: "Internetová cenzura je nejsystematičtěji zavedena v:",
						answers: {
							create: [
								{
									text: "Rusku,",
								},
								{
									text: "Číně,",
									correct: true
								},
								{
									text: "Pákistánu,",
								},
								{
									text: "Saudské Arábii."
								}
							]
						}
					},
					{
						text: "Blackout neboli shutdown je ve světě internetu:",
						answers: {
							create: [
								{
									text: "kompletní odpojení obyvatelstva od přístupu k internetu,",
									correct: true
								},
								{
									text: "výpadek elektrického proudu, který zapříčiní nemožnost být online,",
								},
								{
									text: "regulace přístupu k internetu během různých denních dob,"
								},
								{
									text: "ani jedna z těchto možností termín nepopisuje."
								},
							]
						}
					},
					{
						text: "Hacktivismus nemůže být realizován:",
						answers: {
							create: [
								{
									text: "útoky na vybrané stránky a úpravy jejich obsahu.",
								},
								{
									text: "vytvářením a spravováním anonymizujícího softwaru,",
								},
								{
									text: "virtuálními protesty,",
									correct: true
								},
								{
									text: "online organizací skutečných protestů v ulicích,",
								},
								{
									text: "získáváním a zveřejňováním utajených informací.",
								},
							]
						}
					},
					{
						text: "Produkty jako Microsoft Windows a Office, Adobe nebo Skype jsou příklady:",
						answers: {
							create: [
								{
									text: "otevřeného softwaru,",
								},
								{
									text: "uzavřeného softwaru,",
									correct: true
								},
								{
									text: "kombinací výše zmíněných.",
								},
							]
						}
					},
					{
						text: "“Vypnutí internetu v jedné zemi má vliv i za hranice této země.” Toto tvrzení je:",
						answers: {
							create: [
								{
									text: "pravdivé, protože internet je globální, a jsme tak všichni součástí propojené sítě;",
									correct: true
								},
								{
									text: "nepravdivé, protože každá země má svůj internet a například podniky vždy musí mít servery v zemi, kde podnikají.",
								},
							]
						}
					},
					{
						text: "Kyberprostor si můžeme představit jako:",
						answers: {
							create: [
								{
									text: "filozofický a nadnesený popis prostoru, ve kterém žijeme a realizujeme se online;",
								},
								{
									text: "fyzickou infrastrukturu, díky které internet jako takový funguje;",
								},
								{
									text: "obě předchozí možnosti jsou správně.",
									correct: true
								}
							]
						}
					},
					{
						text: "Cyberwar neboli kybernetická válka označuje:",
						answers: {
							create: [
								{
									text: "vedení války v online prostoru, kdy si dvě země dlouhodobě vyměňují údery;",
									correct: true
								},
								{
									text: "offline soutěž nejlepších IT profesionálů;",
								},
								{
									text: "vedení války v offline prostoru, kde sehrávají hlavní úlohu roboti na každé straně válečného konfliktu.",
								}
							]
						}
					},
					{
						text: "Zero-day fenomén označuje:",
						answers: {
							create: [
								{
									text: "rychlý válečný konflikt, který netrvá ani jeden den;",
								},
								{
									text: "systematické hledání kritických chyb v systému;",
									correct: true
								},
								{
									text: "chybu v systému, která má za následek totální blackout v oblasti.",
								}
							]
						}
					},
					{
						text: "Z hlediska kyberbezpečnosti je stále jednou z největších hrozeb:",
						answers: {
							create: [
								{
									text: "virus zvaný “Stuxnet”,",
								},
								{
									text: "tak zvaný Trojský kůň,",
								},
								{
									text: "lidský faktor,",
									correct: true
								},
								{
									text: "špatné nastavení secure shell protokolu."
								},
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 6: Technologie a regulace',
			media: ' https://youtu.be/h0Ic-qPAExY',
			description: '',
			questions: {
				create: [
					{
						text: "Pojem GOVERNANCE označuje:",
						answers: {
							create: [
								{
									text: "vládnoucí organizace a aktéry či skupiny, které se podílejí na rozhodnutí, tzv. stakeholders;",
								},
								{
									text: "proces volby vlády;",
								},
								{
									text: "proces vládnutí nebo správu, a značí tak procesy a činy, které vládnutí obsahuje.",
									correct: true
								},
							]
						}
					},
					{
						text: "Společnost Napster na začátku 90. let odstartovala revoluci a zásadní zlom v hudebním průmyslu a ukázala nutnost přehodnotit:",
						answers: {
							create: [
								{
									text: "autorská práva na internetu,",
								},
								{
									text: "distribuční modely obsahu,",
								},
								{
									text: "způsob výstavby internetové technologie,"
								},
								{
									text: "kapacitu datových center,"
								},
								{
									text: "pouze možnosti “a” a “b” jsou správně,",
									correct: true
								},
								{
									text: "pouze možnosti “a” a “c”  jsou správně,"
								},
								{
									text: "pouze možnosti “b” a “d”  jsou správně."
								},
							]
						}
					},
					{
						text: "Velké nahrávací značky se v 90.letech ocitly na rozcestí, kdy mohly buď přistoupit na náhlou vlnu inovace, nebo se jí bránit. Zvolily si útok a obranu proti těmto revolučním pokrokům. Tento postup nebyl dostatečně efektivní protože:",
						answers: {
							create: [
								{
									text: "se přizpůsobily inovacím příliš pozdě, a navodily si tak nechtěné újmy;",
								},
								{
									text: "neefektivně se bránily tradičním způsobem a skrze žaloby, což ale v dlouhodobém měřítku nebylo adekvátně pružné a efektivní, a tak si navodily nechtěné újmy;",
								},
								{
									text: "nesprávně odhadly přízeň uživatelů, kterou tyto inovace získaly;",
								},
								{
									text: "všechny možnosti jsou správně a zároveň ilustrují nutnost adaptace jakéhokoliv průmyslu na nové možnosti.",
									correct: true
								},
							]
						}
					},
					{
						text: "Twitter:",
						answers: {
							create: [
								{
									text: "dává důraz na svobodu slova, ale za cenu umožnění projevů extremistických názorových skupin;",
									correct: true
								},
								{
									text: "má striktní pravidla pro povolené projevy na platformě, přeci jen je jeho primární účel vyjádření slovem;",
								},
								{
									text: "má speciální pravidla pro různé skupiny lidí (političtí aktéři, nezletilí, národnosti).",
								},
							]
						}
					},
					{
						text: "Copyright:",
						answers: {
							create: [
								{
									text: "je součástí jak státní agendy, tak i agendy spadající například pod Světovou organizaci duševního vlastnictví pod Organizací spojených národů;",
									correct: true
								},
								{
									text: "není v žádné zemi součástí státní agendy ani Světové organizace duševního vlastnictví;",
								},
								{
									text: "je součástí pouze státní agendy.",
								},
							]
						}
					},
					{
						text: "GDPR adresuje:",
						answers: {
							create: [
								{
									text: "ochranu osobních údajů,",
									correct: true
								},
								{
									text: "ochranu proti jakékoliv ztrátě dat,",
								},
								{
									text: "ochranu pouze citlivých údajů z dat veřejných.",
								}
							]
						}
					},
					{
						text: "EU prostřednictvím GDPR práva uživatelů na internetu:",
						answers: {
							create: [
								{
									text: "výrazně posílila,",
									correct: true
								},
								{
									text: "výrazně oslabila,",
								},
								{
									text: "nepodporuje ani neomezuje práva uživatelů.",
								}
							]
						}
					},
					{
						text: "Internet",
						answers: {
							create: [
								{
									text: "potřebuje hardwarové prvky ke svému fungování,",
									correct: true
								},
								{
									text: "potřebuje jen softwarové prvky ke svému fungování,",
								},
								{
									text: "nespoléhá na tradiční spojení, jako jsou telefonní linky (např. “Dráty, ústředny” apod.).",
								},
								{
									text: "špatné nastavení secure shell protokolu."
								},
							]
						}
					},
					{
						text: "Infrastruktura internetu:",
						answers: {
							create: [
								{
									text: "je jednou z oblastí, kde vládnutí a správa většinově neleží na bedrech vlád;",
									correct: true
								},
								{
									text: "je oblastí, která leží zásadně na bedrech vlád;",
								},
								{
									text: "formuje organizaci vlád. ",
								},
							]
						}
					},
					{
						text: "ITU je zkratka pro:",
						answers: {
							create: [
								{
									text: "Internet Turing Union, tedy pro skupinu kryptografů, kteří čerpají z odkazu Alana Turinga;",
								},
								{
									text: "International Telecommunication Union, tedy pro mezinárodní telekomunikační unii, která je agenturou OSN;",
									correct: true
								},
								{
									text: "International Twitter United, tedy pro komunitu sdruženou kolem sociální sítě Twitter.",
								},
							]
						}
					},
				]
			}
		},
		{
			title: 'Kapitola 7: Vývoj internetu a rovnosti příležitostí',
			media: ' https://youtu.be/6BL5gHtIfeo',
			description: '',
			questions: {
				create: [
					{
						text: "S prvním prototypem internetu vznikla i organizace ARPANET:",
						answers: {
							create: [
								{
									text: "nezkráceně Advanced Research Projects Agency Network, která byla původně založená amerických ministerstvem obrany;",
									correct: true
								},
								{
									text: "nezkráceně Automated Research Projects Agency Network, která byla původně založená britským ministerstvem obrany;",
								},
								{
									text: "nezkráceně Automated Research Projects Agency Network, která byla původně založená ruským a americkým ministerstvem obrany.",
								},
							]
						}
					},
					{
						text: "Pro komunikaci v rámci sítí je třeba:",
						answers: {
							create: [
								{
									text: "sada pravidel, která určují složení jednotlivých komunikačních zpráv a význam signálů, tedy jasné postupy neboli protokoly;",
									correct: true
								},
								{
									text: "volná distribuce s občasnými pravidly, která určují složení jednotlivých komunikačních zpráv a význam signálů, tedy jasné postupy a protokoly;",
								},
								{
									text: "se vyvarovat protokolů a “povinných návodů”, aby se docílilo svobody, pro kterou internet vznikl."
								},
							]
						}
					},
					{
						text: "HTTP je:",
						answers: {
							create: [
								{
									text: "internetový protokol určený pro komunikaci s webovými servery;",
									correct: true
								},
								{
									text: "číslo používané v informatice, které jednoznačně identifikuje polohu zařízení v počítačové síti používající IP protokol;",
								},
								{
									text: "lokátor specifikující jednoznačné umístění nějakého zdroje v internetu.",
								},
							]
						}
					},
					{
						text: "URL je:",
						answers: {
							create: [
								{
									text: "podobé jako IP adresa, ale pro zdroje na internetu, zkratka uniform resource locator;",
									correct: true
								},
								{
									text: "uniformní relokátor linků, tedy dynamický a proměnlivý protokol zajišťující ochranu linků před neznámými servery;",
								},
								{
									text: "Unique resource of likes, tedy marketingový pojem užívaný pro měření počtu liků na profilech sociálních médií.",
								},
							]
						}
					},
					{
						text: "Internet není tvořen:",
						answers: {
							create: [
								{
									text: "surface webem,",
									correct: true
								},
								{
									text: "black webem,",
								},
								{
									text: "deep webem,",
								},
								{
									text: "dark webem,",
								},
							]
						}
					},
					{
						text: "Pojem digital divide neboli digitální propast označuje:",
						answers: {
							create: [
								{
									text: "rozdíl mezi skupinami lidí zapříčiněný možností či nemožností přístupu k internetu;",
									correct: true
								},
								{
									text: "rozdíl přístupu k internetu z různých zařízení, například z počítače a z mobilu;",
								},
								{
									text: "propast mezi různými časovými periodami v rámci vývoje internetu.",
								}
							]
						}
					},
					{
						text: "Mezi významné ženské osobnosti internetu neřadíme:",
						answers: {
							create: [
								{
									text: "Hedy Lamarr",
								},
								{
									text: "Adu Lovelace",
								},
								{
									text: "Nicole Kidman",
									correct: true
								},
								{
									text: "Stephanie “Steve” Shirley",
								}
							]
						}
					},
					{
						text: "Dark web je:",
						answers: {
							create: [
								{
									text: "ilegální síť pro nákup ilegálního zboží;",
								},
								{
									text: "část povrchového webu vyžadující přístup (např. e-mailová adresa);",
								},
								{
									text: "legální síť, která umožňuje uživatelům přístup k internetu a informacím s vyšší úrovní anonymity a  bezpečnosti.",
									correct: true
								},
							]
						}
					},
					{
						text: "Deep web je:",
						answers: {
							create: [
								{
									text: "ilegální síť pro nákup ilegálního zboží,",
								},
								{
									text: "běžně navštěvovná část webu vyžadující přístup (např. e-mailová adresa),",
									correct: true
								},
								{
									text: "legální síť, která neumožňuje uživatelům přístup k internetu a informacím s vyšší úrovní anonymity a  bezpečnosti.",
								},
							]
						}
					},
				]
			},
		},
		{
			title: 'Kapitola 8: Nové technologie, krypto a životní prostředí',
			media: ' https://youtu.be/eNG9lKtT2yE',
			description: '',
			questions: {
				create: [
					{
						text: "Užívání algoritmů pracujících na bázi dat, které pocházejí z našeho běžného uživatelského života:",
						answers: {
							create: [
								{
									text: "vede vždy k naprosto přesné podstatě věci;",
								},
								{
									text: "může vést k rozhodování, které je zkreslené, a proto i diskriminační;",
									correct: true
								},
								{
									text: "nemůže být nikdy diskriminační.",
								},
							]
						}
					},
					{
						text: "Kontext je do detailů vnímán:",
						answers: {
							create: [
								{
									text: "umělou inteligencí i algoritmy,",
									correct: true
								},
								{
									text: "umělou inteligencí, ale ne algoritmy,",
								},
								{
									text: "není vnímán ani umělou inteligencí, ani algoritmy."
								},
							]
						}
					},
					{
						text: "Kryptoměny:",
						answers: {
							create: [
								{
									text: "jsou vymyšlené neobdchodovatelné jednotky s nepeněžní hodnotou,",
									correct: true
								},
								{
									text: "jsou zástupci hodnoty stejně jako peníze,",
								},
								{
									text: "jsou měny vytvořené za účelem snadného placení a nemají žádný další účel.",
								},
							]
						}
					},
					{
						text: "Blockchain je:",
						answers: {
							create: [
								{
									text: "struktura, díky níž lze ověřit každý čin na ní provedený, ať už se jedná o nákup, komunikaci nebo směnu;",
									correct: true
								},
								{
									text: "je kryptoměnou z roku 2020;",
								},
								{
									text: "je obchodovatelná forma bitcoinu.",
								},
							]
						}
					},
					{
						text: "Bitcoin získal svou hodnotu na základě:",
						answers: {
							create: [
								{
									text: "infrastruktury Blockchain,",
									correct: true
								},
								{
									text: "tweetů Elona Muska,",
								},
								{
									text: "omezeného množství speciálních hardwarových jednotek.",
								},
							]
						}
					},
					{
						text: "Ethereum umožňuje:",
						answers: {
							create: [
								{
									text: "chytré kontakty,",
								},
								{
									text: "chytrá konta,",
								},
								{
									text: "chytré kontrakty.",
									correct: true
								}
							]
						}
					},
					{
						text: "Datová centra jsou:",
						answers: {
							create: [
								{
									text: "nové formy “logistických center” v digitálním světě, které symbolizují materializovaný internet;",
								},
								{
									text: "obchodní centra, kde se dají koupit data;",
								},
								{
									text: "Nicole Kidman",
									correct: true
								},
								{
									text: "centrální server, přes který lze najímat datové analytiky.",
								}
							]
						}
					},
					{
						text: "Energetická poptávka datových center by se mohla vyšplhat až na:",
						answers: {
							create: [
								{
									text: "3–⁠5 % celkové světové poptávky po elektřině,",
								},
								{
									text: "8–⁠10 % celkové světové poptávky po elektřině,",
								},
								{
									text: "více jak 13 % celkové světové poptávky po elektřině.",
									correct: true
								},
							]
						}
					},
					{
						text: "“Užívání internetu nezvyšuje energetickou poptávku a nevytváří ani vyšší zátěž pro životní prostředí.” Toto tvrzení je:",
						answers: {
							create: [
								{
									text: "pravda –⁠ například užíváním internetu šetříme papír, DVD a jiné komodity, to znamená v celkově nižší spotřebu jako takovou; ",
								},
								{
									text: "lež –⁠ ať už jde o datová centra, streamování videí či komunikační sítě, tak vše má a bude mít, byť pro nás okem nepříliš viditelně, velký dopad na životní prostředí.",
									correct: true
								},
							]
						}
					},
					{
						text: "Dopad internetu a nových technologií na životní prostředí se projevuje:",
						answers: {
							create: [
								{
									text: "zvýšenou poptávkou po elektřině a větším znečištěním v podobě odpadu, nemůže mít žádný pozitivní dopad;",
								},
								{
									text: "zvýšenou poptávkou po elektřině a větším znečištěním v podobě odpadu. Zároveň nám ale mohou nové technologie pomáhat v boji proti nepříznivému vývoji v oblasti životního prostředí;",
									correct: true
								},
								{
									text: "zvýšenou poptávkou po elektřině a větším znečištěním v podobě odpadu, ale zároveň nám mohou nové technologie pomáhat v boji proti nepříznivému vývoji v oblasti životního prostředí a odpad se recykluje. Celkový dopad je tak neutrální, jelikož se tímto faktem “vynuluje”.",
								},
							]
						}
					},
					{
						text: "E-trashing je pojem, který značí:",
						answers: {
							create: [
								{
									text: "odpad z vyhozeného hardwaru,",
									correct: true
								},
								{
									text: "online hru o recyklaci,",
								},
								{
									text: "novou iniciativu Greenpeace podněcující k větší recyklaci,",
								},
								{
									text: "všechny tyto možnosti.",
								},
							]
						}
					},
				]
			},
		},
		{
			title: 'Kapitola 9: Pohled do 4.0',
			media: ' https://youtu.be/31uvkarpMYY',
			description: '',
			questions: {
				create: [
					{
						text: "V roce 2009 představil Google personalizované vyhledávání. To přineslo:",
						answers: {
							create: [
								{
									text: "větší ochranu soukromí a dat,",
								},
								{
									text: "stejně relevantní výsledky vyhledávání, ale větší využívání dat uživatelů,",
								},
								{
									text: "přesnější výsledky vyhledávání, ovšem za cenu sbírání většího množství osobních dat.",
									correct: true
								},
							]
						}
					},
					{
						text: "Průmysl 4.0 značí:",
						answers: {
							create: [
								{
									text: "průmysl, který například zahrnuje propojování strojů a jejich snadné řízení a optimalizaci procesů;",
									correct: true
								},
								{
									text: "výrobu, která je kompletně automatizována a řízena pouze umělou inteligencí a roboty;",
								},
								{
									text: "výrobu, která je orientována na IT produkty."
								},
							]
						}
					},
					{
						text: "Internet věcí značí:",
						answers: {
							create: [
								{
									text: "běžně užívané věci v domácnosti, které jsou připojené k internetu, ale nemohou spolu komunikovat;",
								},
								{
									text: "běžné věci, které jsou připojené k internetu, ale které můžeme ovládat pouze v případě, že jsme v jejich blízkosti;",
								},
								{
									text: "síť mnohých zařízení umožňující například optimalizaci jejich ovládání fungování a tak zjednodušení našeho každodenního života.",
									correct: true
								},
							]
						}
					},
					{
						text: "Moc směřovat vývoj budoucnosti ovlivněné internetem má:",
						answers: {
							create: [
								{
									text: "každý,",
									correct: true
								},
								{
									text: "vlády jednotlivých států,",
								},
								{
									text: "společnosti působící v IT. ",
								},
							]
						}
					},
					{
						text: "Co myslí filozof Luciano Floridi tím, že žijeme “onlife”? Myslí tím:",
						answers: {
							create: [
								{
									text: "že bychom se všichni měli naučit programovat, protože je vše online,",
								},
								{
									text: "že už nemůžeme oddělit online a offline, protože jsou provázány veškerými rozhodnutími, která činíme,",
									correct: true
								},
								{
									text: "že by státy měly více regulovat online prostředí, jelikož se na nich odehrává společenský život.",
								},
							]
						}
					},
					{
						text: "Čím se zabývá datová etika?",
						answers: {
							create: [
								{
									text: "nejvhodnějším určením pravděpodobného data porodu a početí,",
								},
								{
									text: "studuje environmentální dopady internetu a datových center,",
								},
								{
									text: "studuje a hodnotí problémy spojené s daty a algoritmy a souvisejícími procesy, aby formulovala jejich morálně přijatelná řešení. ",
									correct: true
								}
							]
						}
					},
					{
						text: "Datová centra jsou:",
						answers: {
							create: [
								{
									text: "nové formy “logistických center” v digitálním světě, které symbolizují materializovaný internet;",
								},
								{
									text: "obchodní centra, kde se dají koupit data;",
								},
								{
									text: "Nicole Kidman",
									correct: true
								},
								{
									text: "centrální server, přes který lze najímat datové analytiky.",
								}
							]
						}
					},
					{
						text: "Dynamiku internetu nejlépe poznáme, pokud ji budeme zkoumat přístupem:",
						answers: {
							create: [
								{
									text: "kombinujícím obory a techniky - multidisciplinárním,",
								},
								{
									text: "zkoumajícím opakování minulých vzorců chování lidstva v nových podmínkách – paternalistickým,",
								},
								{
									text: "zdůrazňujícím dopady nových technologií na světové trhy, a tak i na společnosti – ekonomickým.",
									correct: true
								},
							]
						}
					},
					{
						text: "V online prostoru se díky demokratické debatě:",
						answers: {
							create: [
								{
									text: "tvoří hnutí, která nemají pouze funkci neorganizovaného kalibru, ale která jsou i ideově propojená;",
									correct: true
								},
								{
									text: "tvoří hnutí, která mají pouze funkci organizovaného hnutí;",
								},
								{
									text: "netvoří žádná hnutí."
								},
							]
						}
					},
				]
			},
		},
	]
}
const questions = {
	create: [
		{
			text: "Servery jsou nutné pro:",
			answers: {
				create: [
					{
						text: "jakoukoliv komunikaci;",
					},
					{
						text: "všechny aplikace a programy, které jsou připojené k internetu;",
						correct: true
					},
					{
						text: "pouze pro vlastníky e-shopů."
					}
				]
			}
		},
		{
			text: "Jak si lze představit aplikace:",
			answers: {
				create: [
					{
						text: "jako zkratky, expresní vlaky, které přeskakují potřebu vyhledávače a dostanou nás rovnou na místo, kam potřebujeme;",
						correct: true
					},
					{
						text: "jako chytrá okna, která slouží jako reklamní poutač společnosti v našem telefonu;",
					},
					{
						text: "jako starý druh vyhledávače, který byl nahrazen moderními, rychlejšími vyhledávači, jako je např. Google Chrome aj."
					}
				]
			}
		},
		{
			text: "Algoritmy se nejvíce podobají:",
			answers: {
				create: [
					{
						text: "návodu na sestavení nábytku,",
					},
					{
						text: "popisu obrázku,",
						correct: true
					},
					{
						text: "vysvětlení významu dopravních značek,"
					},
					{
						text: "ani jedné z možností – představují naprosto jiný, mnohem složitější princip."
					}
				]
			}
		},
		{
			text: "Umělá inteligence:",
			answers: {
				create: [
					{
						text: "zastává úkoly “složitějšího algoritmu”, zefektivňuje úsilí a každý její krok v procesu je možné zmapovat;",
					},
					{
						text: "nezastává úlohu “složitějšího algoritmu” a žádný její krok v procesu nelze zmapovat;",
					},
					{
						text: "zastává úlohu “složitějšího algoritmu”, ale ne všechny její kroky je možné zmapovat.",
						correct: true
					},
				]
			}
		},
		{
			text: "Cookie je ve světě internetu:",
			answers: {
				create: [
					{
						text: "malé množství informací o uživateli v podobě dat, které server pošle prohlížeči, jenž je následně uloží na počítač uživatele;",
						correct: true
					},
					{
						text: "vyjádření, že uživatel chápe funkce webových stránek, které musí odesílat, ale které zároveň nemá žádné využití pro provozovatele webu;",

					},
					{
						text: "charitativní činnost, jejímž zakliknutím přimějeme majitele webových stránek, aby poslal sušenky dětem do rozvojových zemí."
					},
				]
			}
		},
		{
			text: "Algoritmická předpojatost neboli bias značí:",
			answers: {
				create: [
					{
						text: "neomylnou inteligenci strojů,",
					},
					{
						text: "příklad “strojové hlouposti inteligentních strojů”, který vede ke zkreslené představě o podobě uživatele,",
						correct: true
					},
					{
						text: "fenomén “bias” popsaný již starými řeckými bájemi a pověstmi."
					},
				]
			}
		},
		{
			text: "Aplikace:",
			answers: {
				create: [
					{
						text: "o nás sbírají data po souhlasu s podmínkami užívání a zásad o ochraně osobních údajů,",
						correct: true
					},
					{
						text: "nemají přesně stanovené podmínky užívání a zásady o ochraně osobních údajů, ",
					},
					{
						text: "mají stejné podmínky užívání a zásady o ochraně osobních údajů, se kterými už jsme souhlasili na Facebooku. ",
					}
				]
			}
		},
		{
			text: "Hacktivismus nemůže být realizován:",
			answers: {
				create: [
					{
						text: "útoky na vybrané stránky a úpravy jejich obsahu.",
					},
					{
						text: "vytvářením a spravováním anonymizujícího softwaru,",
					},
					{
						text: "virtuálními protesty,",
						correct: true
					},
					{
						text: "online organizací skutečných protestů v ulicích,",
					},
					{
						text: "získáváním a zveřejňováním utajených informací.",
					},
				]
			}
		},
		{
			text: "GDPR adresuje:",
			answers: {
				create: [
					{
						text: "ochranu osobních údajů,",
						correct: true
					},
					{
						text: "ochranu proti jakékoliv ztrátě dat,",
					},
					{
						text: "ochranu pouze citlivých údajů z dat veřejných.",
					}
				]
			}
		},
		{
			text: "Pojem GOVERNANCE označuje:",
			answers: {
				create: [
					{
						text: "vládnoucí organizace a aktéry či skupiny, které se podílejí na rozhodnutí, tzv. stakeholders;",
					},
					{
						text: "proces volby vlády;",
					},
					{
						text: "proces vládnutí nebo správu, a značí tak procesy a činy, které vládnutí obsahuje.",
						correct: true
					},
				]
			}
		},
		{
			text: "Zero-day fenomén označuje:",
			answers: {
				create: [
					{
						text: "rychlý válečný konflikt, který netrvá ani jeden den;",
					},
					{
						text: "systematické hledání kritických chyb v systému;",
						correct: true
					},
					{
						text: "chybu v systému, která má za následek totální blackout v oblasti.",
					}
				]
			}
		},
		{
			text: "Moc směřovat vývoj budoucnosti ovlivněné internetem má:",
			answers: {
				create: [
					{
						text: "každý,",
						correct: true
					},
					{
						text: "vlády jednotlivých států,",
					},
					{
						text: "společnosti působící v IT. ",
					},
				]
			}
		},
		{
			text: "E-trashing je pojem, který značí:",
			answers: {
				create: [
					{
						text: "odpad z vyhozeného hardwaru,",
						correct: true
					},
					{
						text: "online hru o recyklaci,",
					},
					{
						text: "novou iniciativu Greenpeace podněcující k větší recyklaci,",
					},
					{
						text: "všechny tyto možnosti.",
					},
				]
			}
		},
		{
			text: "Dark web je:",
			answers: {
				create: [
					{
						text: "ilegální síť pro nákup ilegálního zboží;",
					},
					{
						text: "část povrchového webu vyžadující přístup (např. e-mailová adresa);",
					},
					{
						text: "legální síť, která umožňuje uživatelům přístup k internetu a informacím s vyšší úrovní anonymity a  bezpečnosti.",
						correct: true
					},
				]
			}
		},
		{
			text: "HTTP je:",
			answers: {
				create: [
					{
						text: "internetový protokol určený pro komunikaci s webovými servery;",
						correct: true
					},
					{
						text: "číslo používané v informatice, které jednoznačně identifikuje polohu zařízení v počítačové síti používající IP protokol;",
					},
					{
						text: "lokátor specifikující jednoznačné umístění nějakého zdroje v internetu.",
					},
				]
			}
		},
		{
			text: "Internetová cenzura je nejsystematičtěji zavedena v:",
			answers: {
				create: [
					{
						text: "Rusku,",
					},
					{
						text: "Číně,",
						correct: true
					},
					{
						text: "Pákistánu,",
					},
					{
						text: "Saudské Arábii."
					}
				]
			}
		},
		{
			text: "Boti jsou",
			answers: {
				create: [
					{
						text: "programy, které opakovaně vykonávají určité činnosti,",
						correct: true
					},
					{
						text: "účty na sociálních médiích, které trollí,",
					},
					{
						text: "roboti, kteří jsou užíváni ve výrobě a skladech.",
					}
				]
			}
		},
		{
			text: "V současné době platí, že:",
			answers: {
				create: [
					{
						text: "i účast v občanské společnosti je komerčním činem, jelikož zprostředkovatel a garant této interakce je komerční, a tak z těchto interakcí těží;",
						correct: true
					},
					{
						text: "účast v občanské společnosti není komerčním činem, jelikož zprostředkovatel a garant této interakce je sice komerční, ale z těchto interakcí nikdy netěží;"
					},
					{
						text: "účast v občanské společnosti za žádných okolností není monetizovatelná;",
					},
					{
						text: "ani jedno z těchto tvrzení neplatí."
					}
				]
			}
		},
		{
			text: "Cílem platforem je:",
			answers: {
				create: [
					{
						text: "udržet naši pozornost po přesně stanovenou dobu,",
					},
					{
						text: "udržet naši pozornost po maximální dobu,",
						correct: true
					},
					{
						text: "nesnažit se udržet naši pozornost, ale přesměrovat nás na jinou stránku."
					}
				]
			}
		},
		{
			text: "Influenceři jsou:",
			answers: {
				create: [
					{
						text: "uživatelé s vlivnou online personou;",
						correct: true
					},
					{
						text: "uživatelé, kteří se zabývají kosmetikou;",
					},
					{
						text: "pouze slavní herci, zpěváci a moderátoři.",
					}
				]
			}
		},
		{
			text: "Měkké techniky projevu moci jsou na internetu umožněny na základě využívání praktik založených primárně na:",
			answers: {
				create: [
					{
						text: "informacích,",
						correct: true
					},
					{
						text: "speciálních aplikacích,",
					},
					{
						text: "dark webu,",
					},
					{
						text: "kombinací všech možností.",
					}
				]
			}
		},
		{
			text: "Digitální persony se tvoří:",
			answers: {
				create: [
					{
						text: "jen uživatelům sociálních médií,",

					},
					{
						text: "jen uživatelům sociálních médií a jejich aplikací,",
					},
					{
						text: "téměř všem, kteří se pohybují na internetu.",
						correct: true
					}
				]
			}
		},
		{
			text: "Datová centra jsou:",
			answers: {
				create: [
					{
						text: "nové formy “logistických center” v digitálním světě, které symbolizují materializovaný internet;",
					},
					{
						text: "obchodní centra, kde se dají koupit data;",
					},
					{
						text: "Nicole Kidman",
						correct: true
					},
					{
						text: "centrální server, přes který lze najímat datové analytiky.",
					}
				]
			}
		},
		{
			text: "Pro komunikaci v rámci sítí je třeba:",
			answers: {
				create: [
					{
						text: "sada pravidel, která určují složení jednotlivých komunikačních zpráv a význam signálů, tedy jasné postupy neboli protokoly;",
						correct: true
					},
					{
						text: "volná distribuce s občasnými pravidly, která určují složení jednotlivých komunikačních zpráv a význam signálů, tedy jasné postupy a protokoly;",
					},
					{
						text: "se vyvarovat protokolů a “povinných návodů”, aby se docílilo svobody, pro kterou internet vznikl."
					},
				]
			}
		},
		{
			text: "E-shopy na nás mohou cílit reklamu s konkrétními produkty, které jsme si v minulosti prohlíželi, díky:",
			answers: {
				create: [
					{
						text: "odposlouchávání,",
					},
					{
						text: "remarketingu,",
						correct: true
					},
					{
						text: "náhodě."
					},
				]
			}
		},
	]
}


const workshop = {
	title: "Dynamika internetu",
	author: "Tereza Bartoníčková",
	summary: "Vyzkoušejte základní kurz naší platformy o internetu a jeho vlivu na společnost.",
	imageUrl: "https://studiooo.cz/images/dynamic_web_image.png",
	overview: "Základní kurz, který poskytuje přehled toho, co by nutně měl každý, kdo žije v digitální době vědět. Aby byl schopen adaptovat se na moderní dobu, pracovní trh, vzít svůj osud do vlastních rukou a být schopen udělat si vlastní názor na rozličné zprávy týkající se internetu a technologií.",
	content: "Kurz Dynamika internetu jsme vytvořili, aby každý mohl získat přehled o tom, co za změny a posuny způsobuje internet v našich životech a směřování naší společnosti. Cílem kurzu je jednoduché osvětlení mechanismů díky kterým funguje a které fungují na něm a díky němu, včetně změn, které přináší a oblastí, které zasahuje. Vysvětluje jednoduchými slovy zdánlivě složité záležitosti, zasazuje kusé informace kontextu a vysvětluje jejich provázání. Poskytuje také příklady a zajímavosti pro ilustraci a vyhýbá se jakémukoliv souzení témat. Každý, kdo kurzem projde by tak měl být schopen udělat si obrázek a kriticky uvažovat jak o zprávách z médií, tak o svém vlastním vztahu k internetu. ",
	description: "V tomto kurzu přiblížíme fenomény a pojmy (ale nebudeme stroze vyčítat definice), jednoduše a s příklady osvětlíme komplexní problémy a provážeme si je. Díky tomu otevřeme vašemu pohledu obzory, které se v souvislosti s internetem řeší & položíme tak stabilní základy pro další vzdělávání a váš růst.",
	hours: 15,
	difficulty: "Univerzální",
	isPaid: false,
	chapters,
	questions,
	chapterNumber: 12,
	videoUrl: "",
	publishedAt: new Date(),
	createdAt: new Date(),
	updatedAt: new Date(),
	published: true,
	tolerance: 70.0
}



export const seed = async () => {

	try {
		await prisma.workshop.create({
			data: {
				...workshop
			},
			include: {
				chapters: {
					include: {
						questions: {
							include: {
								answers: true
							}
						}
					}
				},
				questions: {
					include: {
						answers: true
					}
				}
			}
		})


	} catch (error) {

	}
}

seed()
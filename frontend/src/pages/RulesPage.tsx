export default function RulesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold text-amber-500">
        Spelregels &mdash; Kleurenwiezen
      </h1>

      {/* Inleiding */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Inleiding</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Voor het verdere vervolg van de spelregels worden de volgende termen
          gebruikt:
        </p>
        <dl className="space-y-2 text-sm text-zinc-400">
          <div>
            <dt className="font-medium text-zinc-200">Soorten</dt>
            <dd className="ml-4">
              Harten: &hearts;, Koeken: &diams;, Klavers: &clubs;, Pijkens:
              &spades;
            </dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">Slag</dt>
            <dd className="ml-4">Elke persoon legt een kaart.</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">Ronde</dt>
            <dd className="ml-4">13 slagen worden gespeeld.</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-200">Troef</dt>
            <dd className="ml-4">
              Een kaart waarmee je de slag kan &ldquo;kopen&rdquo;. Als er
              gekocht wordt en niemand koopt hoger, wint dit de slag.
            </dd>
          </div>
        </dl>
      </section>

      {/* Spelers en kaarten */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">
          Spelers en kaarten
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Kleurenwiezen wordt gespeeld met 4 spelers. Elke speler speelt voor
          zichzelf, maar kan samenwerken met de andere spelers. Hierbij kan er
          twee tegen twee of een tegen drie gespeeld worden.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Het spel wordt gespeeld met de standaard 52 kaarten. Jokers worden
          niet gebruikt.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          De volgorde van de soorten van hoog naar laag is{" "}
          <strong className="text-zinc-200">
            harten, koeken, klavers, pijkens
          </strong>
          . De volgorde van de kaarten is aas, koning, dame, boer, 10 tot 2.
        </p>
      </section>

      {/* Delen */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Delen</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Het delen gebeurt met de klok mee. De eerste deler is random,
          vervolgens altijd de volgende speler van links.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          De kaarten worden niet geschud tussen de rondes. Er wordt wel afgepakt
          door de persoon die de vorige ronde heeft gedeeld. Dit wilt zeggen: de
          stapel kaarten in twee delen en de stapel die origineel vanboven zat
          onderaan steken. Het aantal afgepakte kaarten moet minstens drie zijn,
          en er moeten ook altijd 3 kaarten overblijven.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Vervolgens worden de kaarten gedeeld. Elke persoon krijgt eerst een
          pakketje van 4 kaarten, dan 5, uiteindelijk nog 4.
        </p>
      </section>

      {/* Bieden */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Bieden</h2>

        <h3 className="text-lg font-medium text-zinc-200">Het proces</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          Het bieden bestaat uit verschillende &ldquo;rondes&rdquo;. Spelers
          kunnen in deze rondes een actie kiezen die zij denken te kunnen
          behalen.
        </p>
        <ul className="ml-6 list-disc space-y-1 text-sm text-zinc-400">
          <li>
            <strong className="text-zinc-200">Boven bieden:</strong> een hogere
            actie gaan dan de huidige hoogste.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400">
          Allereerst volgt het aankondigen van troel of troela. Deze spelers
          gaan samen, maar iedereen mag nog boven bieden.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Hierna komt het vragen/meegaan of speciale acties kiezen. Spelers
          bieden hierin tegen elkaar op en beslissen wie de ronde samen speelt.
          Indien een speler een speciale actie wilt ondernemen, moet dit
          onmiddellijk aangekondigd worden. Er mag niet eerst gevraagd,
          meegegaan of gewacht worden.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Het is hierbij toegestaan om twee keer rond te gaan. Na de tweede keer
          rond gaan kan er alleen nog meegegaan worden.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Als er meerdere keren dezelfde actie wordt gekozen, wordt er gekeken
          naar de volgorde van de soorten. De persoon met de hogere type heeft
          voorrang.
        </p>

        <h3 className="text-lg font-medium text-zinc-200">Opties</h3>

        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Passen</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Een speler die geen speciale actie wil ondernemen, past. Deze
              persoon kan vervolgens niets meer doen tijdens het bieden.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Wachten</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Dit is een actie die alleen kan ondernomen worden door de speler
              links van de deler. Als deze wacht, is het voor hun nog toegestaan
              mee te gaan met een andere speler, maar kan geen andere actie meer
              ondernemen.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Vragen</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Een speler zegt een type. Een andere speler kan hierin meegaan. De
              vraag blijft gelden tot de speler terug aan het woord is, waarna
              die het type kan herhalen, veranderen, of meegaan met een andere
              speler. Andere acties kunnen niet meer gedaan worden.
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Een speler kan vragen in het volgende geval:
            </p>
            <ul className="ml-6 mt-1 list-disc text-sm text-zinc-400">
              <li>De speler heeft nog geen andere actie aangekondigd</li>
              <li>
                Een andere speler heeft nog geen actie met dat type kaart
                gevraagd
              </li>
              <li>De speler heeft minstens 1 kaart van dat type</li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Meegaan</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Een speler kan meegaan op het vragen van een andere speler. Deze
              twee spelers zullen dan verder het spel spelen, en moeten minstens
              8 slagen halen. De speler die meegaat moet verder opbieden, met de
              volgende opties:
            </p>
            <ul className="ml-6 mt-1 list-disc text-sm text-zinc-400">
              <li>
                Er moet hoger geboden worden dan de huidige actie. Dit kan door
                een hoger getal te bieden, of hetzelfde aantal als het type
                hoger is.
              </li>
              <li>
                De speler die meegaat kan ook passen. Hierna kan de speler die
                origineel heeft gevraagd nog solo gaan.
              </li>
              <li>Passe parole indien er 11 of meer slagen geboden worden.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Passe Parole</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Passe Parole is een optie die gespeeld wordt in sommige groepen.
              Wij kiezen ervoor deze niet te gebruiken. Hierbij wordt het
              opbieden gewisseld naar de persoon die het type gevraagd heeft.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium zinc-amber-200">Solo</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Een speler kan solo gaan, indien deze dit wenst. Hierbij wordt er
              gespeeld tegen de drie andere spelers. Dit kan indien:
            </p>
            <ul className="ml-6 mt-1 list-disc text-sm text-zinc-400">
              <li>niemand mee ging bij het vragen</li>
              <li>niemand kan mee gaan bij het vragen</li>
              <li>
                er origineel samen werd gegaan maar de persoon die meeging heeft
                gepast
              </li>
            </ul>
            <p className="mt-2 text-sm text-zinc-400">
              Het maximaal aantal solo slagen dat kan worden gespeeld is 8.
              Indien de speler hoger wilt bieden, moet deze onmiddellijk
              abondance aankondigen, zonder eerst te vragen, solo of mee te
              gaan.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Kleine miserie</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Wanneer een speler kleine miserie gaat, wordt er eerst door elke
              speler een kaart afgelegd, zonder deze te tonen. Hierna moet de
              speler die kleine miserie gaat, 0 slagen halen. Er is geen troef.
              Meerdere spelers kunnen in een ronde kleine miserie gaan.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Piccolo</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Wanneer een speler piccolo gaat, speelt deze om 1 slag te halen.
              Er worden geen kaarten weggelegd, er is geen troef. Meerdere
              spelers kunnen in een ronde piccolo gaan.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Troel</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Een speler die drie azen heeft, kondigt troel aan. De persoon met
              de vierde aas gaat mee, de vierde aas is troef. De persoon met de
              vierde aas komt deze uit, dit is de troef. Er moeten 8 slagen
              gehaald worden door deze spelers.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Troela</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Troela is een uitbreiding op Troel, en komt voor wanneer een
              speler vier azen heeft. De persoon met de volgende hoogste harten
              (standaard de koning) gaat mee en komt deze uit. Harten is troef,
              er moeten 9 slagen gehaald worden.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Abondance</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Wanneer een speler abondance gaat, speelt die alleen tegen de
              andere spelers, en moet 9, 10, 11 of 12 slagen halen. Andere
              spelers kunnen nog hoger bieden, de speler die abondance
              aankondigt kan dan naar een hogere abondance of soloslim bieden.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Grote miserie</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Wanneer een speler grote miserie gaat, mag die geen enkele slag
              halen. Er is geen troef. Meerdere spelers kunnen tegelijk grote
              miserie gaan.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Blote miserie</h4>
            <p className="mt-1 text-sm text-zinc-400">
              Wanneer een speler blote miserie gaat, mag die geen enkele slag
              halen. De eerste slag wordt normaal gespeeld, hierna legt deze
              speler zijn kaarten open op tafel en speelt zo verder. Meerdere
              spelers kunnen tegelijk blote miserie gaan.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <h4 className="font-medium text-zinc-200">Solo slim</h4>
            <p className="mt-1 text-sm text-zinc-400">
              De speler kiest een troef en moet vervolgens alle 13 slagen halen.
            </p>
          </div>
        </div>
      </section>

      {/* Spelen */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Spelen</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Zodra de hoogste actie is bepaald, kan er worden gespeeld. De speler
          links van de deler legt de eerste kaart. Alle spelers moeten het type
          volgen, maar moeten niet noodzakelijk een hogere kaart leggen. Een
          speler die het type niet heeft kan (maar moet niet) kopen.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Wanneer alle spelers een kaart gelegd hebben, wint de speler met de
          hoogste kaart van het type (of troef indien gekocht), de slag. De
          winnaar van de slag komt vervolgens uit voor de volgende slag.
        </p>
      </section>

      {/* Scores */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Scores</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Wanneer alle 13 slagen gespeeld zijn, wordt de score van de ronde
          bepaald. Wanneer een speler alleen gaat, krijgt die een zeker aantal,
          de andere spelers verliezen een derde van dat aantal. Wanneer twee
          spelers samen gaan, krijgen die elk een zeker aantal. De andere
          spelers verliezen elk dat aantal. Overslagen, slagen die &ldquo;te
          veel&rdquo; zijn gehaald, zorgen voor extra punten. Onderslagen,
          slagen die &ldquo;te weinig&rdquo; zijn gehaald, zorgen voor verlies
          van punten.
        </p>
      </section>

      {/* Fout */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Fout</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Wanneer er een fout gemaakt wordt; bij het delen, niet aankondigen van
          troel(a), etc. wordt er een strafscore toegekend. De speler die de
          fout heeft gemaakt verliest 15 punten, de andere spelers krijgen 5
          punten bij.
        </p>
      </section>

      {/* SCORETABEL */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-100">Scoretabel</h2>
        <p className="text-xs italic text-zinc-500">
          Indien bij overslagen een + staat, wordt dit opgeteld bij gehaald,
          anders is dat de score. Wanneer meerdere spelers een miserie doen,
          worden deze punten apart berekend.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-700 bg-zinc-900">
                <th className="px-4 py-2 text-left font-medium text-zinc-200">
                  Actie
                </th>
                <th className="px-4 py-2 text-right font-medium text-zinc-200">
                  gehaald
                </th>
                <th className="px-4 py-2 text-right font-medium text-zinc-200">
                  Overslagen
                </th>
                <th className="px-4 py-2 text-right font-medium text-zinc-200">
                  Onderslagen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">samen 8</td>
                <td className="px-4 py-2 text-right">7</td>
                <td className="px-4 py-2 text-right text-green-400">
                  +3, +6, +9, +12, 30
                </td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;7 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">solo 5</td>
                <td className="px-4 py-2 text-right">9</td>
                <td className="px-4 py-2 text-right text-green-400">
                  +3, +6, +9, +12
                </td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;9 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">samen 9</td>
                <td className="px-4 py-2 text-right">10</td>
                <td className="px-4 py-2 text-right text-green-400">
                  +3, +6, +9, 30
                </td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;10 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">solo 6</td>
                <td className="px-4 py-2 text-right">12</td>
                <td className="px-4 py-2 text-right text-green-400">
                  +3, +6, +9
                </td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;12 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">samen 10</td>
                <td className="px-4 py-2 text-right">13</td>
                <td className="px-4 py-2 text-right text-green-400">
                  +3, +6, 30
                </td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;13 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">solo 7</td>
                <td className="px-4 py-2 text-right">15</td>
                <td className="px-4 py-2 text-right text-green-400">+3</td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;15 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">samen 11</td>
                <td className="px-4 py-2 text-right">16</td>
                <td className="px-4 py-2 text-right text-green-400">+3, 30</td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;16 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">kleine miserie</td>
                <td className="px-4 py-2 text-right">18</td>
                <td className="px-4 py-2 text-right text-zinc-600">&mdash;</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;18</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">solo 8</td>
                <td className="px-4 py-2 text-right">18</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;18 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">samen 12</td>
                <td className="px-4 py-2 text-right">19</td>
                <td className="px-4 py-2 text-right text-green-400">30</td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;18 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">piccolo</td>
                <td className="px-4 py-2 text-right">24</td>
                <td className="px-4 py-2 text-right text-zinc-600">&mdash;</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;24</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">abondance 9</td>
                <td className="px-4 py-2 text-right">27</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;27</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">samen 13</td>
                <td className="px-4 py-2 text-right">30</td>
                <td className="px-4 py-2 text-right text-zinc-600">&mdash;</td>
                <td className="px-4 py-2 text-right text-red-400">
                  &minus;30 + &minus;3 per onderslag
                </td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">abondance 10</td>
                <td className="px-4 py-2 text-right">33</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;33</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">troel(a)</td>
                <td className="px-4 py-2 text-right">16</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;16</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">grote miserie</td>
                <td className="px-4 py-2 text-right">36</td>
                <td className="px-4 py-2 text-right text-zinc-600">&mdash;</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;36</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">abondance 11</td>
                <td className="px-4 py-2 text-right">45</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;45</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">blote miserie</td>
                <td className="px-4 py-2 text-right">60</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;60</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">abondance 12</td>
                <td className="px-4 py-2 text-right">66</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;66</td>
              </tr>
              <tr className="bg-zinc-950/50 text-zinc-400 hover:bg-zinc-900/50">
                <td className="px-4 py-2">solo slim</td>
                <td className="px-4 py-2 text-right">99</td>
                <td className="px-4 py-2 text-right text-zinc-500">0</td>
                <td className="px-4 py-2 text-right text-red-400">&minus;99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

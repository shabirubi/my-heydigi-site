const rows = [
  ["ישיבה במקום", "שולחנות במרינה, מתאים לזוגות, משפחות וקבוצות קטנות."],
  ["איסוף עצמי", "להתקשר מראש, להגיע חם, לקחת לים או הביתה."],
  ["קבוצות", "מומלץ לתאם לפני הגעה כדי לשמור רצף שירות נוח."],
];

const faqs = [
  ["איפה אתם נמצאים?", "במרינה באשדוד, בסביבה נוחה להגעה רגלית לאורך קו המים."],
  ["צריך להזמין מקום?", "בערבים ובסופי שבוע כדאי לשמור מקום מראש."],
  ["יש מנות לילדים?", "כן, אפשר לבחור שיפודים, צ׳יפס, סלטים ומנות פשוטות יותר."],
];

export default function VisitPanel() {
  return (
    <section id="visit-panel" data-section-id="visit-panel" className="scroll-mt-24 bg-background">
      <div className="container-page py-[var(--space-section)]">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="text-[var(--text-caption)] font-extrabold text-primary">03 / השוואת ביקור ושאלות</p>
          <h2 className="font-display text-[var(--text-h2)] font-black leading-[1.1] text-foreground">
            לבחור איך מגיעים, ואז לתת לגריל לעשות את השאר.
          </h2>
        </div>

        <div className="overflow-x-auto border-y border-border">
          <table className="w-full min-w-[40rem] border-collapse text-right">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pl-6 text-[var(--text-caption)] font-extrabold text-muted-foreground">אפשרות</th>
                <th className="py-4 text-[var(--text-caption)] font-extrabold text-muted-foreground">מה חשוב לדעת</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, detail]) => (
                <tr key={name} className="border-b border-border last:border-b-0">
                  <td className="py-5 pl-6 text-[1.1rem] font-extrabold text-foreground">{name}</td>
                  <td className="py-5 text-[1.05rem] leading-[1.6] text-muted-foreground">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-start">
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-border pb-4">
                <summary className="cursor-pointer list-none text-[1.12rem] font-extrabold text-foreground">
                  {question}
                  <span className="float-left text-primary group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[58ch] text-[1.02rem] leading-[1.65] text-muted-foreground">{answer}</p>
              </details>
            ))}
            <div className="pt-5">
              <a href="tel:0000000000" className="rounded-[var(--radius)] bg-primary px-6 py-3 font-extrabold text-primary-foreground">
                התקשרו לשמירת מקום
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[1.05rem] font-extrabold text-foreground">שעות מומלצות</p>
            <p className="mb-6 text-[var(--text-body)] leading-[1.7] text-muted-foreground">
              צהריים עד ערב מאוחר. מומלץ לוודא שעות פעילות לפני הגעה, במיוחד בחגים ובאירועים במרינה.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
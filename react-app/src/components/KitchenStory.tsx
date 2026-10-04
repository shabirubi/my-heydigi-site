export default function KitchenStory() {
  return (
    <section id="kitchen-story" data-section-id="kitchen-story" className="scroll-mt-24 bg-muted">
      <div className="container-page py-[var(--space-section)]">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <p className="mb-5 text-[var(--text-caption)] font-extrabold text-primary">02 / סיפור האש והמטבח במרינה</p>
            <h2 className="font-display text-[var(--text-h2)] font-black leading-[1.1] text-foreground">
              המטבח נשאר פשוט כדי שהאש תדבר ברור.
            </h2>
          </div>
          <p className="text-[var(--text-body)] leading-[1.7] text-foreground">
            באבו שבי לא מחביאים את הגריל. שומעים את הפחמים, רואים את הנתח עולה לרשת, ומרגישים את הקו שבין
            סטקייה שכונתית לבין ארוחה של מרינה: פתוחה, נדיבה, בלי טקס מיותר.
          </p>
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="space-y-7">
            {[
              ["בחירת בשר", "נתחים ושיפודים שנכנסים לאש רק כשהם מוכנים להגשה."],
              ["סלטים לשולחן", "חמוצים, טחינה, חריף ורעננות שמאזנת את העשן."],
              ["קצב מרינה", "ישיבה רגועה, שירות ישיר, ואוכל שיוצא חם מהגריל."],
            ].map(([title, text]) => (
              <div key={title} className="border-b border-border pb-5">
                <h3 className="mb-2 text-[1.15rem] font-extrabold text-foreground">{title}</h3>
                <p className="text-[1.02rem] leading-[1.65] text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
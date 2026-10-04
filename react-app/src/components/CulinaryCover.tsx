export default function CulinaryCover() {
  return (
    <section id="culinary-cover" data-section-id="culinary-cover" className="scroll-mt-24 bg-background pt-16">
      <div className="container-page flex min-h-[calc(100svh-4rem)] items-end pb-12 pt-14 md:items-center md:pb-0">
        <div className="max-w-[52rem]">
          <p className="mb-7 border-t border-border pt-3 text-[var(--text-caption)] font-extrabold uppercase tracking-[0.18em] text-primary">
            אשדוד / קו המים / גריל פחמים
          </p>
          <h1 className="display-primary max-w-[10.5ch] text-foreground">
            סטקיית אבו שבי אשדוד במרינה אש, מלח, ים.
          </h1>
        </div>
      </div>

      <div className="rule-top rule-bottom">
        <div className="container-page flex flex-col gap-8 py-9 md:flex-row md:items-start md:justify-between">
          <p className="max-w-[62ch] text-[1.125rem] leading-[1.7] text-foreground">
            סטקייה מקומית על קו המרינה: נתחי בקר על פחמים, שיפודים עסיסיים, סלטים שנפתחים לשולחן, וקצב שירות שמתאים לארוחת צהריים מהירה או ערב ארוך מול הים.
          </p>
          <a
            href="#visit"
            className="w-fit rounded-[var(--radius)] border border-border px-6 py-3 text-[1rem] font-extrabold text-foreground transition hover:border-primary hover:text-primary"
          >
            איך מגיעים ושומרים מקום
          </a>
        </div>
      </div>
    </section>
  );
}
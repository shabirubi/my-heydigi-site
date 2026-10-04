const dishes = [
  {
    name: "שיפודי פרגית על פחמים",
    category: "שיפודים",
    detail: "מרינדה עדינה, צריבה קצרה, מוגש עם סלטים חמים וטחינה.",
    imagePrompt: "editorial still life of charcoal grilled chicken skewers with tahini, chopped herbs and warm salads on a simple metal table, marina steakhouse mood, shallow depth of field, ink teal and warm saffron color grade",
  },
  {
    name: "אנטריקוט מיושן",
    category: "נתחי גריל",
    detail: "נתח עבה שנכנס לאש חזקה, נח על קרש, ונחתך לשולחן.",
    imagePrompt: "editorial still life of thick aged entrecote steak sliced on a wooden board with sea salt and charred peppers, Israeli marina steakhouse, directional side light, ink teal and warm saffron color grade",
  },
  {
    name: "קבב הבית",
    category: "טחינה במקום",
    detail: "בשר מתובל ביד יציבה, שומן נכון, קליפה חרוכה ולב עסיסי.",
    imagePrompt: "editorial still life of house kebab from a charcoal grill with grilled tomato, onion and fresh parsley, textured plate in a working steakhouse, ink teal and warm saffron color grade",
  },
  {
    name: "מעורב ירושלמי",
    category: "מחבת לוהטת",
    detail: "בצל, תבלין, חלקי פנים וקצב אש שמרים את כל הביס.",
    imagePrompt: "editorial still life of Jerusalem mixed grill in a hot black skillet with onions and spices, steam rising in a marina restaurant kitchen, ink teal and warm saffron color grade",
  },
];

export default function SignatureDishes() {
  return (
    <section id="signature-dishes" data-section-id="signature-dishes" className="scroll-mt-24 bg-background">
      <div className="container-page py-[var(--space-section)]">
        <div className="mb-10 flex flex-col gap-5 md:grid md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-[var(--text-caption)] font-extrabold text-primary">01 / קטגוריות אש ותפריט סטקייה</p>
          <h2 className="font-display text-[var(--text-h2)] font-black leading-[1.08] text-foreground">
            לא תפריט ארוך. רצף מדויק של דברים שיודעים לעבוד על גחלים.
          </h2>
        </div>

        <div className="rule-top">
          {dishes.map((dish, index) => (
            <article data-section-id="signature-dishes-s2"
              key={dish.name}
              className="grid gap-5 border-b border-border py-8 md:grid-cols-[4rem_1fr_1.2fr] md:items-center"
            >
              <span className="font-display text-[var(--text-h3)] font-black text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="mb-2 text-[var(--text-caption)] font-extrabold text-primary">{dish.category}</p>
                <h3 className="font-display text-[var(--text-h3)] font-black leading-tight text-foreground">{dish.name}</h3>
              </div>
              <div className="grid gap-5 md:grid-cols-[1fr_9rem] md:items-center">
                <p className="text-[var(--text-body)] leading-[1.65] text-muted-foreground">{dish.detail}</p>
                {__heydigiImageByPrompt[dish.imagePrompt] ? <img
                  src="__AI_IMAGE__"
                  data-ai-image-prompt={dish.imagePrompt}
                  data-image-id="signature-dishes-img1"
                  alt={dish.name}
                  className="aspect-[4/3] w-full rounded-[var(--radius)] object-cover md:aspect-square"
                /> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
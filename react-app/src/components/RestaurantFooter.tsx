export default function RestaurantFooter() {
  return (
    <footer id="footer" data-section-id="restaurant-footer" className="scroll-mt-24 border-t border-border bg-background">
      <div className="container-page flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between w-full max-w-full overflow-x-auto">
        <p className="font-display text-[1.35rem] font-black text-foreground">סטקיית אבו שבי · מרינה אשדוד</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.98rem] font-bold text-muted-foreground">
          <a href="#dishes" className="hover:text-primary">תפריט</a>
          <a href="#story" className="hover:text-primary">מטבח</a>
          <a href="#visit" className="hover:text-primary">הגעה</a>
          <a href="tel:0000000000" className="hover:text-primary">טלפון</a>
        </div>
      </div>
    </footer>
  );
}
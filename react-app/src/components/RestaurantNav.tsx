import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#culinary-cover", label: "Culinary Cover", imagePrompt: "Culinary Cover." },
  { href: "#signature-dishes", label: "Signature Dishes", imagePrompt: "Signature Dishes." },
];

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <header data-section-id="restaurant-nav-s1" className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between px-5 md:px-10">
        <a href="#culinary-cover" className="text-lg font-bold text-foreground">סטקיית אבו שבי אשדוד במרינה</a>
        <nav data-section-id="restaurant-nav-s2" aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-foreground/80 hover:text-foreground">{link.label}</a>)}
          <a href="#kitchen-story" className="inline-flex min-h-11 items-center border border-border px-4 font-semibold text-foreground hover:bg-primary hover:text-primary-foreground">לשולחן שלנו</a>
        </nav>
        <button type="button" className="inline-flex size-11 items-center justify-center text-foreground md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && <nav data-section-id="restaurant-nav-s3" aria-label="Mobile navigation" className="grid border-t border-border bg-background px-5 py-4 md:hidden">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border text-foreground">{link.label}</a>)}
        <a href="#kitchen-story" onClick={() => setOpen(false)} className="mt-4 inline-flex min-h-12 items-center justify-center bg-primary px-5 font-semibold text-primary-foreground">לשולחן שלנו</a>
      </nav>}
    </header>
  );
}

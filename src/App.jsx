const PRODUCTS = [
  {
    name: 'Celeste Diamond Ring',
    category: 'Rings',
    description: 'Refined brilliance for unforgettable moments.',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Aurora Gold Necklace',
    category: 'Necklaces',
    description: 'A graceful statement for modern elegance.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Luna Pearl Earrings',
    category: 'Earrings',
    description: 'Soft sophistication with timeless charm.',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Solara Charm Bracelet',
    category: 'Bracelets',
    description: 'Elegant craftsmanship for daily luxury.',
    image:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
  },
]

const WHATSAPP_NUMBER = '94706002099'

const sanitizeProductName = (productName) =>
  String(productName).replace(/[^\w\s-]/g, '').trim()

const createWhatsAppLink = (productName) => {
  const safeName = sanitizeProductName(productName)
  const message = `Hello Rupil Jewellery, I am interested in ${safeName}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-luxe-gold/20 bg-[#111111] shadow-luxe transition duration-300 hover:-translate-y-1 hover:border-luxe-gold/60">
      <img
        src={product.image}
        alt={`${product.name} by Rupil Jewellery`}
        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="space-y-4 p-6 text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-luxe-gold">
          {product.category}
        </p>
        <h3 className="font-display text-3xl text-luxe-ivory">{product.name}</h3>
        <p className="text-sm leading-relaxed text-luxe-gray">
          {product.description}
        </p>
        <a
          href={createWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-luxe-gold bg-luxe-gold px-5 py-2 text-sm font-medium text-luxe-black transition hover:bg-transparent hover:text-luxe-gold"
          aria-label={`Buy ${product.name} via WhatsApp`}
        >
          Buy via WhatsApp
        </a>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="bg-luxe-black">
      <header className="sticky top-0 z-30 border-b border-luxe-gold/10 bg-luxe-black/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#hero" className="font-display text-3xl text-luxe-gold">
            Rupil Jewellery
          </a>
          <a
            href="#products"
            className="rounded-full border border-luxe-gold/40 px-4 py-2 text-xs uppercase tracking-[0.16em] text-luxe-ivory transition hover:bg-luxe-gold hover:text-luxe-black"
          >
            View Collection
          </a>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="fade-up relative isolate min-h-[82vh] overflow-hidden border-b border-luxe-gold/10"
        >
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1700&q=80"
            alt="Luxury jewellery showcase"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/70 to-luxe-black" />
          <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24 md:px-8 md:py-32">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-luxe-gold">
              Fine Jewellery House
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[1] text-luxe-ivory md:text-7xl">
              Rupil Jewellery
            </h1>
            <p className="mt-5 max-w-xl text-base text-luxe-gray md:text-lg">
              Timeless Elegance, Crafted for You
            </p>
            <a
              href="#products"
              className="mt-8 rounded-full border border-luxe-gold bg-luxe-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-luxe-black transition hover:bg-transparent hover:text-luxe-gold"
            >
              View Collection
            </a>
          </div>
        </section>

        <section id="products" className="fade-up mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-luxe-gold">
              Signature Collection
            </p>
            <h2 className="mt-3 font-display text-4xl text-luxe-ivory md:text-5xl">
              Rings, Necklaces, Earrings, Bracelets
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section id="about" className="fade-up border-y border-luxe-gold/10 bg-gold-gradient">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
            <h2 className="font-display text-4xl text-luxe-ivory md:text-5xl">
              About Rupil Jewellery
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-luxe-gray md:text-lg">
              Rupil Jewellery offers beautifully crafted jewellery pieces designed
              to match your style and elegance. We bring you high-quality designs
              perfect for every occasion.
            </p>
          </div>
        </section>

        <section id="contact" className="fade-up mx-auto max-w-4xl px-5 py-20 md:px-8">
          <h2 className="text-center font-display text-4xl text-luxe-ivory md:text-5xl">
            Contact
          </h2>
          <div className="mt-10 grid gap-4 rounded-2xl border border-luxe-gold/20 bg-[#121212] p-8 text-center shadow-luxe">
            <p className="text-luxe-gray">
              Phone:{' '}
              <a className="text-luxe-gold" href="tel:+94706002099">
                0706002099
              </a>
            </p>
            <p className="text-luxe-gray">
              Email:{' '}
              <a className="text-luxe-gold" href="mailto:chamidu.rk@gmail.com">
                chamidu.rk@gmail.com
              </a>
            </p>
            <p className="text-luxe-gray">Address: Nattandiya Sri Lanka</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-luxe-gold/10 bg-[#090909]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 text-center md:px-8">
          <p className="font-display text-3xl text-luxe-gold">Rupil Jewellery</p>
          <div className="flex items-center justify-center gap-5 text-sm text-luxe-gray">
            <a href="#0" aria-label="Instagram" className="hover:text-luxe-gold">
              Instagram
            </a>
            <a href="#0" aria-label="Facebook" className="hover:text-luxe-gold">
              Facebook
            </a>
            <a href="#0" aria-label="TikTok" className="hover:text-luxe-gold">
              TikTok
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.12em] text-luxe-gray">
            Copyright {new Date().getFullYear()} Rupil Jewellery. All rights
            reserved.
          </p>
          <p className="text-xs text-luxe-gray">
            Website developed by{' '}
            <a
              href="https://neobitz.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxe-gold transition hover:text-[#e2c793]"
            >
              NeoBitz
            </a>
          </p>
        </div>
      </footer>

      <a
        href={createWhatsAppLink('your preferred jewellery piece')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-luxe transition hover:scale-105"
        aria-label="Chat with Rupil Jewellery on WhatsApp"
      >
        <span className="text-base">WhatsApp</span>
      </a>
    </div>
  )
}

export default App

import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MapPin, Phone } from "lucide-react";

const name = "Silze Sganzerla Boutique";
const title = `${name} | Moda feminina em Araçoiaba da Serra`;
const description =
  "Conheça a Silze Sganzerla Boutique, loja de roupas femininas em Araçoiaba da Serra, SP. Veja a localização e fale com a loja.";
const phone = "(15) 3281-2717";
const telephone = "+551532812717";
const address = {
  streetAddress: "R. João B. da Costa, 97",
  addressLocality: "Araçoiaba da Serra",
  addressRegion: "SP",
  postalCode: "18190-000",
  addressCountry: "BR",
};
const fullAddress = `${address.streetAddress} – Jardim Santa Cruz, ${address.addressLocality} – ${address.addressRegion}, ${address.postalCode}`;
const mapQuery = encodeURIComponent(`${name}, ${fullAddress}`);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
const reviews = [
  {
    author: "Alexandre Deak",
    quote: "Loja com produtos diferenciados para mulheres exigentes.",
  },
  {
    author: "Heloisa Pelegrini",
    quote: "Atendimento atencioso, peças lindas e de boa qualidade.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: "pt_BR" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name,
          telephone,
          address: { "@type": "PostalAddress", ...address },
          hasMap: mapsUrl,
        }),
      },
    ],
  }),
  component: Index,
});

const navigation = [
  { id: "vitrine", label: "Vitrine" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "visite", label: "Visite a loja" },
];

function Wordmark() {
  return (
    <a className="boutique-wordmark" href="#inicio" aria-label={name}>
      Silze Sganzerla
      <span>Boutique</span>
    </a>
  );
}

function Index() {
  return (
    <div className="boutique" id="inicio">
      <a className="boutique-skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="boutique-header boutique-container">
        <Wordmark />
        <nav aria-label="Navegação principal">
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="boutique-button boutique-button-outline boutique-header-contact"
          href={`tel:${telephone}`}
        >
          <Phone size={16} aria-hidden="true" />
          Ligar
        </a>
      </header>

      <main id="conteudo">
        <section className="boutique-hero boutique-container" aria-labelledby="hero-title">
          <div className="boutique-hero-copy">
            <p className="boutique-eyebrow">Moda feminina · Araçoiaba da Serra</p>
            <h1 id="hero-title">
              Silze Sganzerla <em>Boutique</em>
            </h1>
            <p>Descubra a boutique e venha conhecer as peças de perto.</p>
            <a className="boutique-button" href="#visite">
              Planeje sua visita <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <figure className="boutique-hero-image">
            <img
              src="/boutique/editorial.webp"
              alt="Editorial de moda com alfaiataria marrom em um cenário iluminado pelo sol"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <figcaption>Imagem editorial ilustrativa</figcaption>
          </figure>
          <a className="boutique-scroll" href="#vitrine">
            <ArrowDown size={16} aria-hidden="true" /> Explore a boutique
          </a>
        </section>

        <section className="boutique-showcase" id="vitrine" aria-labelledby="showcase-title">
          <div className="boutique-container boutique-section-grid">
            <figure className="boutique-showcase-image">
              <img
                src="/boutique/vitrine.webp"
                alt="Composição editorial de roupas femininas em tons neutros e naturais"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <figcaption>Imagem editorial ilustrativa</figcaption>
            </figure>
            <div>
              <p className="boutique-eyebrow">Moda feminina</p>
              <h2 id="showcase-title">Vitrine da boutique</h2>
              <p>
                Visite a loja para experimentar as peças ou ligue para consultar a seleção
                disponível.
              </p>
              <a className="boutique-text-link" href={`tel:${telephone}`}>
                Consultar peças <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="boutique-reviews boutique-container"
          id="avaliacoes"
          aria-labelledby="reviews-title"
        >
          <p className="boutique-eyebrow">13 avaliações no Google</p>
          <h2 id="reviews-title">O que dizem sobre a boutique</h2>
          <div className="boutique-review-grid">
            {reviews.map(({ author, quote }) => (
              <figure key={author}>
                <span aria-hidden="true">“</span>
                <blockquote>{quote}</blockquote>
                <figcaption>{author}</figcaption>
              </figure>
            ))}
          </div>
          <a className="boutique-text-link" href={mapsUrl} target="_blank" rel="noreferrer">
            Ver perfil no Google <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="boutique-visit" id="visite" aria-labelledby="visit-title">
          <div className="boutique-container boutique-section-grid">
            <div>
              <p className="boutique-eyebrow">Araçoiaba da Serra · SP</p>
              <h2 id="visit-title">Visite a loja</h2>
              <address>
                <MapPin size={20} aria-hidden="true" />
                {fullAddress}
              </address>
              <p className="boutique-visit-phone">
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${telephone}`}>{phone}</a>
              </p>
              <a className="boutique-button" href={directionsUrl} target="_blank" rel="noreferrer">
                Como chegar <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <iframe
              title="Localização da Silze Sganzerla Boutique no Google Maps"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer className="boutique-footer boutique-container">
        <Wordmark />
        <a className="boutique-text-link" href={`tel:${telephone}`}>
          {phone}
        </a>
      </footer>
    </div>
  );
}

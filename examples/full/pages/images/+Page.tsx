export { Page };

import { Head } from "vike-solid/Head";
import logoOld from "../../assets/logo.svg";
import logoNew from "../../assets/logo-new.svg";
import { Counter } from "../../components/Counter";

function Page() {
  return (
    <>
      <p>
        Page showcasing an <code>&lt;Image&gt;</code> component that adds/teleports structured data (
        <code>&lt;script type="application/ld+json"&gt;</code>) to <code>&lt;head&gt;</code>, see HTML.
      </p>
      <div>
        New logo: <Image src={logoNew} author="brillout" />
      </div>
      <br />
      <div>
        Old logo: <Image src={logoOld} author="Romuald Brillout" />
      </div>
      <br />
      <Counter />
    </>
  );
}

function Image({ src, author }: { src: string; author: string }) {
  return (
    <>
      <img src={src} height={48} style={{ "vertical-align": "middle", "margin-left": "10px" }} />
      <Head>
        <script
          type="application/ld+json"
          innerHTML={JSON.stringify({
            "@context": "https://schema.org/",
            contentUrl: { src },
            creator: {
              "@type": "Person",
              name: author,
            },
          })}
        ></script>
      </Head>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, blogPosts } from "../posts";
import { FAQStructuredData } from "@/components/StructuredData";
import { ArticleStructuredData } from "@/components/StructuredData";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: "https://www.camilajurfest.com/sobre-mi" }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.camilajurfest.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Camila Jurfest"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <ArticleStructuredData post={post} />
      <FAQStructuredData faqs={post.faqs} />
      <div className="min-h-screen pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" style={{ color: "var(--warm-gray)" }}>
            <Link href="/" className="hover:underline">Inicio</Link>
            {" / "}
            <Link href="/blog" className="hover:underline">Blog</Link>
            {" / "}
            <span>{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: "var(--lavender-dark)", color: "white" }}
              >
                {post.category}
              </span>
              <time
                className="text-xs"
                style={{ color: "var(--warm-gray)" }}
                dateTime={post.publishedAt}
              >
                {new Date(post.publishedAt).toLocaleDateString("es-UY", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-xs" style={{ color: "var(--warm-gray)" }}>
                · {post.readingTime} min de lectura
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--charcoal)",
              }}
            >
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--warm-gray)" }}>
              {post.description}
            </p>
            <div
              className="mt-6 pt-6 border-t flex items-center gap-3"
              style={{ borderColor: "var(--lavender-light)" }}
            >
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>
                  Por{" "}
                  <Link href="/sobre-mi" className="hover:underline" style={{ color: "var(--lavender-dark)" }}>
                    {post.author}
                  </Link>
                </p>
                <p className="text-xs" style={{ color: "var(--warm-gray)" }}>
                  Psicóloga y Sexóloga Clínica — Montevideo, Uruguay
                </p>
              </div>
            </div>
          </header>

          {/* Article content */}
          {slug === "que-es-la-terapia-sexual" && (
            <TerapiaSexualContent />
          )}
          {slug === "uso-de-preservativos-uruguay" && (
            <PreservativosContent />
          )}

          {/* FAQ section */}
          <section className="mt-12 pt-10 border-t" style={{ borderColor: "var(--lavender-light)" }}>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--charcoal)" }}
            >
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--charcoal)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{ backgroundColor: "var(--lavender-light)" }}
          >
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--charcoal)" }}
            >
              ¿Tenés preguntas sobre tu salud sexual?
            </h2>
            <p className="mb-6" style={{ color: "var(--warm-gray)" }}>
              Hablo con vos sin tabúes, con enfoque clínico y humano. Consultas presenciales
              en Pocitos, Montevideo, y online para todo Uruguay.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 rounded-full text-white font-medium transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "var(--lavender-dark)" }}
            >
              Agendar consulta con Camila
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

function TerapiaSexualContent() {
  return (
    <div
      className="prose-article space-y-6 text-base leading-relaxed"
      style={{ color: "var(--charcoal)" }}
    >
      <p>
        Cuando alguien busca "terapia sexual" por primera vez, suele hacerlo desde un lugar
        de incomodidad: algo no funciona como esperaba, algo le genera angustia, o
        simplemente siente que la sexualidad no ocupa el lugar que debería en su vida.
        Y casi siempre hay una pregunta que no se anima a hacerle a nadie:{" "}
        <strong>¿esto tiene solución?</strong>
      </p>
      <p>
        La respuesta corta es sí. La terapia sexual existe exactamente para eso. Y en
        esta guía te explico qué es, cómo funciona, qué problemas trata y cuándo tiene
        sentido buscar ayuda.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Qué es exactamente la terapia sexual?
      </h2>
      <p>
        La terapia sexual es una forma especializada de psicoterapia que se enfoca en
        la sexualidad humana: su funcionamiento, sus dificultades y su bienestar. No es
        solo hablar de sexo con un profesional —es un proceso estructurado, basado en
        evidencia, que combina técnicas psicológicas con educación sexual clínica.
      </p>
      <p>
        A diferencia de lo que muchos imaginan, <strong>no hay contacto físico</strong> en
        las sesiones. Todo el trabajo ocurre en el plano verbal y cognitivo. Se trabaja con
        técnicas como la reestructuración cognitiva (cambiar pensamientos disfuncionales
        sobre el sexo), la terapia de exposición, los ejercicios de foco sensorial, y
        herramientas de comunicación interpersonal.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿En qué se diferencia de la psicoterapia tradicional?
      </h2>
      <p>
        La psicoterapia clásica aborda la salud mental en sentido amplio: ansiedad,
        depresión, relaciones, autoestima. La terapia sexual tiene un foco específico:
        la sexualidad y todo lo que la rodea.
      </p>
      <p>
        Esto importa porque la sexualidad tiene sus propios mecanismos fisiológicos,
        psicológicos y relacionales. Un terapeuta sin formación especializada puede
        acompañar el proceso emocional, pero no tiene las herramientas técnicas para
        trabajar una disfunción eréctil, un trastorno del deseo o el vaginismo con el
        mismo nivel de precisión que alguien con formación sexológica clínica.
      </p>
      <p>
        Un/a{" "}
        <Link
          href="/sobre-mi"
          className="underline"
          style={{ color: "var(--lavender-dark)" }}
        >
          sexólogo/a clínico/a
        </Link>{" "}
        tiene formación específica en respuesta sexual humana, disfunciones sexuales,
        identidad, diversidad y técnicas terapéuticas con evidencia científica.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Qué problemas trata la terapia sexual?
      </h2>
      <p>
        El abanico es amplio. Algunos de los motivos de consulta más frecuentes:
      </p>

      <h3 className="text-xl font-semibold mt-6">Disfunciones sexuales</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Dificultades con el deseo:</strong> bajo deseo sexual (hipoactividad),
          discrepancia de deseo en pareja, o deseo que genera conflicto.
        </li>
        <li>
          <strong>Dificultades con la excitación:</strong> falta de lubricación vaginal,
          disfunción eréctil, problemas para alcanzar o mantener la erección.
        </li>
        <li>
          <strong>Dificultades con el orgasmo:</strong> anorgasmia (dificultad para
          alcanzar el orgasmo), eyaculación precoz, eyaculación retardada.
        </li>
        <li>
          <strong>Dolor sexual:</strong> vaginismo, dispareunía (dolor durante la
          penetración), vulvodinia.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Aspectos identitarios y relacionales</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Exploración de la orientación sexual o identidad de género</li>
        <li>Vivencias de vergüenza, culpa o conflicto en torno a la sexualidad</li>
        <li>Dificultades para comunicarse con la pareja sobre el sexo</li>
        <li>Después de una infidelidad o crisis de pareja que afecta la vida sexual</li>
        <li>Impacto de la historia personal (trauma, abuso) en la sexualidad actual</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Cambios vitales</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sexualidad durante el embarazo y el posparto</li>
        <li>Cambios en la sexualidad por menopausia o andropausia</li>
        <li>Impacto de enfermedades crónicas o medicamentos en la vida sexual</li>
        <li>Retomar la vida sexual después de un período de abstinencia</li>
      </ul>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Cómo son las sesiones de terapia sexual?
      </h2>
      <p>
        La primera sesión siempre es de evaluación. El objetivo es entender el motivo de
        consulta en profundidad: cuándo empezó, qué lo genera, qué lo mantiene, qué recursos
        tiene la persona. No hay nada raro ni invasivo en esto —es una conversación
        profesional, con preguntas específicas, en un marco de total confidencialidad.
      </p>
      <p>
        A partir de esa evaluación, se arma un plan de trabajo personalizado. Las sesiones
        siguientes combinan distintos elementos según el caso:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Psicoeducación:</strong> información precisa sobre anatomía, respuesta
          sexual, mitos frecuentes. Muchas dificultades sexuales se alimentan de
          información incorrecta.
        </li>
        <li>
          <strong>Trabajo cognitivo:</strong> identificar y modificar pensamientos
          automáticos negativos sobre el sexo ("soy anormal", "a mi pareja no le intereso",
          "siempre me va a pasar lo mismo").
        </li>
        <li>
          <strong>Técnicas conductuales:</strong> ejercicios estructurados para hacer en
          privado o en pareja, diseñados para recuperar la conexión con el propio cuerpo
          o con la pareja.
        </li>
        <li>
          <strong>Comunicación:</strong> herramientas concretas para hablar de sexo con la
          pareja, expresar deseos y límites, y negociar diferencias.
        </li>
      </ul>
      <p>
        Las sesiones suelen durar entre 50 y 60 minutos y tienen frecuencia semanal o
        quincenal. También pueden hacerse de forma presencial en Pocitos, Montevideo, o{" "}
        <Link
          href="/terapia-sexual"
          className="underline"
          style={{ color: "var(--lavender-dark)" }}
        >
          de forma online
        </Link>{" "}
        para todo Uruguay y el exterior.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Cuándo buscar ayuda de una sexóloga clínica?
      </h2>
      <p>
        No existe un umbral mínimo de sufrimiento para ir a terapia sexual. No es necesario
        "estar muy mal" o que la dificultad sea grave. Algunos indicadores que pueden
        orientarte:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Algo relacionado con tu sexualidad te genera angustia, vergüenza o evitación
          de forma recurrente.
        </li>
        <li>
          Tenés una dificultad funcional (orgasmo, erección, dolor, deseo) que se repite
          y no mejora sola.
        </li>
        <li>
          La vida sexual de tu pareja está afectada y no saben cómo abordarlo.
        </li>
        <li>
          Sentís que tu historia personal afecta tu capacidad de disfrutar o conectar
          íntimamente.
        </li>
        <li>
          Querés explorar tu sexualidad desde un lugar más libre y consciente, sin que
          haya necesariamente un "problema".
        </li>
      </ul>
      <p>
        Este último punto es importante: la terapia sexual no es solo para cuando algo
        "no funciona". También es para quienes quieren conocerse mejor, ampliar su
        repertorio o simplemente tener un espacio de reflexión sobre su vida sexual.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Terapia sexual en Uruguay: qué esperar
      </h2>
      <p>
        En Uruguay, la salud sexual como campo profesional ha crecido en los últimos años,
        pero la oferta especializada sigue siendo limitada. Es importante distinguir entre
        un psicólogo general que trabaja temas de sexualidad y un sexólogo clínico con
        formación específica.
      </p>
      <p>
        Al buscar un/a terapeuta sexual en Montevideo o en Uruguay, conviene verificar:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Formación en psicología o medicina (título universitario habilitado)</li>
        <li>Especialización en sexología clínica (posgrado, no solo cursos)</li>
        <li>Enfoque terapéutico basado en evidencia (cognitivo-conductual, sistémico)</li>
        <li>Posibilidad de atención online, para mayor accesibilidad desde el interior</li>
      </ul>
      <p>
        La{" "}
        <Link
          href="/terapia-sexual"
          className="underline"
          style={{ color: "var(--lavender-dark)" }}
        >
          terapia sexual
        </Link>{" "}
        que ofrezco combina la formación en psicología clínica (UCU), la especialización
        en sexología clínica (SUS Uruguay) y la terapia sexual cognitivo-conductual-sistémica
        (UBA). Las consultas son presenciales en Pocitos y online para todo el país y el exterior.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Conclusión
      </h2>
      <p>
        La terapia sexual es un proceso psicológico especializado que trabaja la sexualidad
        desde un lugar clínico, empático y sin juicio. No requiere contacto físico, no es
        algo "raro" y no exige que la situación sea extrema para buscarla.
      </p>
      <p>
        Si algo en tu vida sexual te genera malestar, curiosidad o simplemente querés un
        espacio para hablarlo sin tabúes, ese es motivo suficiente. El primer paso —pedir
        turno y contar lo que pasa— suele ser el más difícil. Después de eso, el camino
        se hace más fácil.
      </p>
    </div>
  );
}

function PreservativosContent() {
  return (
    <div
      className="prose-article space-y-6 text-base leading-relaxed"
      style={{ color: "var(--charcoal)" }}
    >
      <p>
        En Uruguay, el uso de preservativos está en el centro del debate de salud pública.
        Y por una razón muy concreta: en 2024 se notificaron{" "}
        <strong>842 nuevos casos de VIH</strong> y{" "}
        <strong>7.035 casos de sífilis</strong> —una tasa de 196,6 por cada 100.000
        habitantes—. Números que hablan de una epidemia que no está bajo control.
      </p>
      <p>
        Y sin embargo, el preservativo sigue siendo subestimado, mal usado o directamente
        abandonado por mitos que llevan décadas circulando. Como sexóloga clínica, veo en
        consulta el impacto real de eso: angustia, vergüenza, diagnósticos tardíos.
      </p>
      <p>
        Esta guía está pensada para darte información clara, sin rodeos, sobre el uso de
        preservativos en Uruguay: por qué importa, cómo usarlos bien y cómo hablar de ellos
        con tu pareja.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Por qué están aumentando el VIH y la sífilis en Uruguay?
      </h2>
      <p>
        Las infecciones de transmisión sexual (ITS) no discriminan edad, género ni nivel
        socioeconómico. Pero hay patrones claros. Los datos del{" "}
        <strong>Ministerio de Salud Pública (MSP)</strong> muestran que:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          La <strong>sífilis</strong> creció de forma sostenida en la última década,
          con la tasa más alta registrada en 2024.
        </li>
        <li>
          El <strong>VIH</strong> sigue siendo una epidemia concentrada, con mayor
          incidencia en hombres que tienen sexo con hombres (HSH), aunque afecta cada vez
          más a personas heterosexuales y mujeres jóvenes.
        </li>
        <li>
          El diagnóstico tardío es un problema grave: muchas personas se enteran de que
          tienen VIH cuando ya están en etapas avanzadas.
        </li>
      </ul>
      <p>
        Detrás de estas cifras hay un factor común: la discontinuidad en el uso del
        preservativo. Las relaciones de pareja, la confianza percibida, el consumo de
        alcohol o el desconocimiento llevan a que el condón se use "a veces" en lugar de
        siempre.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        HPV y cáncer: el vínculo que mucha gente no conoce
      </h2>
      <p>
        El <strong>virus del papiloma humano (HPV)</strong> es la ITS más frecuente del
        mundo. En Uruguay, como en el resto de la región, está directamente vinculado con:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Cáncer de cuello de útero</strong> — la cuarta causa de muerte por cáncer
          en mujeres jóvenes en América Latina.
        </li>
        <li>
          <strong>Cánceres de orofaringe, laringe y lengua</strong> — en aumento en
          hombres, vinculados al HPV transmitido por sexo oral.
        </li>
        <li>
          <strong>Cánceres anales y peneanos</strong> — especialmente en HSH.
        </li>
      </ul>
      <p>
        El preservativo reduce significativamente el riesgo de transmisión del HPV, aunque
        no cubre toda la piel genital. La complementación con la{" "}
        <strong>vacuna contra el HPV</strong> —disponible en Uruguay para adolescentes y
        también para adultos— es fundamental.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Los 4 mitos que hacen que la gente no use preservativos
      </h2>

      <h3 className="text-xl font-semibold mt-6">
        Mito 1: "El preservativo reduce la sensibilidad"
      </h3>
      <p>
        <strong>Realidad:</strong> Los preservativos ultrafinos modernos tienen entre
        0,04 y 0,05 mm de grosor y están diseñados para transmitir el calor corporal con
        mínima interferencia. La mayoría de las personas que reportan reducción de
        sensibilidad están usando condones demasiado ajustados o de la talla equivocada.
        Probar distintas marcas y materiales (látex, poliuretano, polisopreno) hace una
        diferencia enorme.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Mito 2: "Arruina el momento"
      </h3>
      <p>
        <strong>Realidad:</strong> Este mito se alimenta de la idea de que el preservativo
        es una "interrupción". En realidad, incorporar el condón como parte del juego previo
        —que sea la pareja quien lo coloca, por ejemplo— convierte esa pausa en algo
        erótico. Es una cuestión de práctica y de cambiar el marco mental.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Mito 3: "Confío en mi pareja, no necesito condón"
      </h3>
      <p>
        <strong>Realidad:</strong> La confianza no es método anticonceptivo ni preventivo
        de ITS. Muchas ITS, incluido el VIH, pueden estar presentes sin síntomas durante
        años. Ninguna persona puede saber su estado serológico sin hacerse la prueba. La
        honestidad en la pareja pasa por hacerse los controles, no por asumir.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Mito 4: "Con la pastilla anticonceptiva es suficiente"
      </h3>
      <p>
        <strong>Realidad:</strong> Los anticonceptivos hormonales previenen el embarazo,
        no las ITS. Son métodos complementarios, no sustitutos. El preservativo es el único
        método que protege simultáneamente contra embarazo no planificado e infecciones.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Guía práctica: cómo elegir el condón correcto
      </h2>
      <p>
        El mercado uruguayo ofrece decenas de opciones. Elegir bien marca la diferencia en
        comodidad y efectividad.
      </p>

      <h3 className="text-xl font-semibold mt-6">Por grosor</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Ultra fino (0,04–0,05 mm):</strong> máxima sensibilidad, ideal para sexo
          vaginal. Marcas como Durex Invisible o Trojan Sensitivity.
        </li>
        <li>
          <strong>Estándar (0,06–0,07 mm):</strong> el más común, buena relación
          resistencia/sensibilidad.
        </li>
        <li>
          <strong>Extra resistente (0,08–0,09 mm):</strong> recomendado para sexo anal
          o si hay mayor fricción.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Por material</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Látex:</strong> el más común y económico. No compatible con lubricantes
          a base de aceite.
        </li>
        <li>
          <strong>Poliuretano:</strong> para personas con alergia al látex. Compatible con
          todos los lubricantes.
        </li>
        <li>
          <strong>Polisopreno:</strong> sensación más natural que el látex, muy flexible.
          No compatible con lubricantes a base de aceite.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Por talla</h3>
      <p>
        El condón estándar tiene entre 52 y 56 mm de ancho nominal. Si se siente ajustado
        o se desliza, probá tallas más grandes (58–69 mm, marcas como Mango o MySize).
        Un condón mal ajustado —por exceso o por defecto— reduce tanto la protección como
        el placer.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Cómo usar el preservativo correctamente (paso a paso)
      </h2>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Verificá la fecha de vencimiento</strong> y que el envoltorio esté
          intacto. Si el paquete no tiene aire (no "sopla" al apretarlo), puede estar
          comprometido.
        </li>
        <li>
          <strong>Abrí el envoltorio con los dedos</strong>, nunca con los dientes o
          tijeras.
        </li>
        <li>
          <strong>Identificá la dirección de enrollado</strong> antes de colocarlo (debe
          desenrollarse hacia afuera).
        </li>
        <li>
          <strong>Pellizca la punta</strong> del condón para eliminar el aire. Ese espacio
          recoge el semen; sin él, el condón puede romperse.
        </li>
        <li>
          <strong>Colocalo con el pene en erección</strong>, antes de cualquier contacto
          genital. El VIH y otras ITS pueden transmitirse también mediante el líquido
          preseminal.
        </li>
        <li>
          <strong>Después de eyacular, retirá el pene mientras aún está erecto</strong>,
          sujetando la base del condón para que no se deslice.
        </li>
        <li>
          <strong>Usá un condón nuevo</strong> para cada acto sexual, incluyendo al cambiar
          de orificio o de pareja.
        </li>
      </ol>
      <p className="mt-3">
        <strong>Lubricante:</strong> si usás condones de látex o polisopreno, usá siempre
        lubricante a base de agua o silicona. Los lubricantes a base de aceite (vaselina,
        aceite de coco, cremas corporales) degradan el látex y aumentan el riesgo de rotura.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Cómo hablar del preservativo con tu pareja
      </h2>
      <p>
        Una de las barreras más grandes no es técnica: es comunicacional. Proponer el
        condón puede sentirse como una acusación de infidelidad o como una señal de
        desconfianza. Algunas estrategias que funcionan:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Hablalo antes del momento sexual</strong>, no durante. Cuando estamos
          excitados, nuestra capacidad de negociación disminuye.
        </li>
        <li>
          <strong>Usá el "yo" en lugar del "vos":</strong> "Me siento más tranquila/o
          usando condón" es menos acusatorio que "Tenés que usar condón".
        </li>
        <li>
          <strong>Normalizá la prueba de ITS</strong> como parte del cuidado mutuo.
          Hacerse la prueba juntos puede ser un acto de intimidad y responsabilidad.
        </li>
        <li>
          <strong>Si tu pareja se niega sistemáticamente</strong>, es información
          importante sobre cómo respeta tus límites. Eso merece una conversación más
          profunda, posiblemente con acompañamiento terapéutico.
        </li>
      </ul>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Preservativo y sexo anal: lo que nadie explica
      </h2>
      <p>
        El sexo anal conlleva un riesgo de transmisión de VIH significativamente mayor que
        el vaginal, especialmente para la persona receptora (pasiva). Esto se debe a que la
        mucosa rectal es más delgada y vascular que la vaginal.
      </p>
      <p>Recomendaciones específicas:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Usá condones de grosor estándar o extra resistente (no ultrafinos) para mayor
          seguridad mecánica.
        </li>
        <li>
          Usá <strong>lubricante a base de agua o silicona en abundancia</strong>. La falta
          de lubricación aumenta la fricción y el riesgo de rotura.
        </li>
        <li>
          Si sos HSH o tenés prácticas de alto riesgo, consultá sobre{" "}
          <strong>PrEP (profilaxis pre-exposición)</strong>, disponible en Uruguay a través
          del MSP y mutualistas.
        </li>
      </ul>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Conclusión: el preservativo como acto de cuidado
      </h2>
      <p>
        El uso de preservativos en Uruguay —y en cualquier parte— no es un tema de
        moralidad ni de desconfianza. Es un acto de cuidado hacia uno mismo y hacia la
        otra persona.
      </p>
      <p>
        Los datos son claros: las ITS están en aumento, muchas personas no saben que están
        infectadas, y el preservativo sigue siendo la herramienta más accesible y eficaz
        que tenemos. Usarlo bien, elegirlo correctamente y poder hablarlo con tu pareja son
        habilidades que se aprenden, y que cambian vidas.
      </p>
      <p>
        Si tenés dudas, vergüenza o dificultades para hablar de salud sexual —con tu pareja
        o con un profesional—, la{" "}
        <Link
          href="/terapia-sexual"
          className="underline"
          style={{ color: "var(--lavender-dark)" }}
        >
          terapia sexual
        </Link>{" "}
        puede ser el espacio que necesitás para trabajar eso.
      </p>
    </div>
  );
}

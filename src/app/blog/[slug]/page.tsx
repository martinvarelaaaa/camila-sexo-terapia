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
          {slug === "vaginismo-causas-sintomas-tratamiento-uruguay" && (
            <VaginismoContent />
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

function VaginismoContent() {
  return (
    <div
      className="prose-article space-y-6 text-base leading-relaxed"
      style={{ color: "var(--charcoal)" }}
    >
      <p>
        Si sentís dolor, ardor o una sensación de "pared" cuando intentás la penetración
        —ya sea en relaciones sexuales, en una revisación ginecológica o al usar tampones—,
        no estás sola. Y lo más importante: lo que te pasa tiene nombre, tiene explicación y{" "}
        <strong>tiene tratamiento</strong>.
      </p>
      <p>
        El vaginismo es una de las condiciones que más atiendo en consulta, y también una de
        las que más alivio genera cuando las personas entienden qué está pasando en su cuerpo
        y que hay un camino concreto para superarlo. Esta guía está escrita para que tengas
        esa claridad.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Qué es el vaginismo?
      </h2>
      <p>
        El vaginismo es la contracción involuntaria de los músculos del suelo pélvico —
        específicamente los músculos pubococcígeos— que rodean la entrada de la vagina.
        Esta contracción ocurre de forma automática, sin que la persona lo decida o lo
        controle conscientemente, ante la anticipación o el intento de penetración.
      </p>
      <p>
        La contracción puede ser tan intensa que hace que la penetración sea dolorosa,
        difícil o directamente imposible. No se trata de falta de deseo, de no estar
        excitada, ni de "no querer". El cuerpo reacciona con una respuesta de protección
        que, en este contexto, se volvió desadaptativa.
      </p>
      <p>
        Es importante aclarar que el vaginismo{" "}
        <strong>no es un defecto anatómico</strong>. La vagina no es "muy pequeña" ni está
        "cerrada". La musculatura está en espasmo, y eso es algo que se puede trabajar y
        resolver.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Tipos de vaginismo: primario y secundario
      </h2>
      <p>
        Distinguir el tipo de vaginismo ayuda a entender su origen y a orientar mejor el
        tratamiento.
      </p>

      <h3 className="text-xl font-semibold mt-6">Vaginismo primario</h3>
      <p>
        Es el que estuvo presente desde siempre —desde los primeros intentos de penetración
        en la vida de la persona. Muchas veces se manifiesta ya en la adolescencia al intentar
        usar tampones, o en la primera visita al ginecólogo. En estos casos, la persona nunca
        pudo tener relaciones con penetración sin dolor o sin que el cuerpo la bloqueara.
      </p>
      <p>
        El vaginismo primario suele estar asociado a creencias muy arraigadas sobre la
        sexualidad, a educación sexual restrictiva o culpabilizadora, a mensajes aprendidos
        de que "la primera vez duele" (que normalizan el dolor como inevitable), o a ansiedad
        anticipatoria que se instaló antes incluso de cualquier experiencia.
      </p>

      <h3 className="text-xl font-semibold mt-6">Vaginismo secundario</h3>
      <p>
        Aparece después de un período en que la penetración era posible sin dolor. Algo
        cambia —una experiencia, una situación— y el cuerpo comienza a responder con la
        contracción protectora.
      </p>
      <p>
        Los desencadenantes más frecuentes del vaginismo secundario incluyen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Un parto vaginal con complicaciones o desgarro</li>
        <li>Una infección o procedimiento ginecológico doloroso</li>
        <li>Una experiencia de abuso sexual o violencia</li>
        <li>Un período prolongado sin actividad sexual (a veces combinado con menopausia)</li>
        <li>Una relación con conflictos no resueltos</li>
        <li>Diagnóstico de una enfermedad que genera miedo al dolor</li>
      </ul>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Causas del vaginismo
      </h2>
      <p>
        El vaginismo no tiene una causa única. Es el resultado de una combinación de factores
        que varían en cada persona. Lo que sí es claro es que <strong>no es un problema
        "de voluntad"</strong> ni algo que se resuelva "intentando más fuerte" o "relajándote".
      </p>

      <h3 className="text-xl font-semibold mt-6">Factores psicológicos y emocionales</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Ansiedad anticipatoria:</strong> el miedo al dolor genera tensión muscular,
          que genera dolor, que confirma el miedo. Un ciclo que se retroalimenta.
        </li>
        <li>
          <strong>Educación sexual punitiva o religiosa:</strong> mensajes de que el sexo es
          pecado, peligroso o "sucio" pueden instalarse como respuestas corporales de rechazo.
        </li>
        <li>
          <strong>Experiencias de abuso o trauma sexual:</strong> el cuerpo aprende a
          protegerse cerrándose ante la amenaza percibida.
        </li>
        <li>
          <strong>Perfeccionismo y control:</strong> personas con alta necesidad de control
          suelen tener más dificultad para "soltar" la musculatura pélvica.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Factores físicos y médicos</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Infecciones vaginales recurrentes que condicionaron la asociación penetración-dolor</li>
        <li>Endometriosis o vulvodinia (dolor crónico vulvar)</li>
        <li>Cambios hormonales (menopausia, postparto, anticonceptivos hormonales)</li>
        <li>Cicatrices post-quirúrgicas o post-parto</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Factores relacionales</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Pareja con dificultades de erección o eyaculación que generan presión</li>
        <li>Comunicación deficiente sobre el dolor durante el sexo</li>
        <li>Sensación de obligación o de no poder decir que no</li>
      </ul>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Síntomas: ¿cómo sé si tengo vaginismo?
      </h2>
      <p>
        El síntoma central es la dificultad o imposibilidad para la penetración vaginal
        acompañada de dolor o sensación de bloqueo. Pero el vaginismo se manifiesta de
        formas que van más allá de eso:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Dolor ardiente, quemante o de presión</strong> en la entrada vaginal ante
          el intento de penetración
        </li>
        <li>
          <strong>Sensación de "pared" o de que "no entra"</strong>, aunque anatómicamente
          no hay ningún obstáculo
        </li>
        <li>
          <strong>Contracción visible o palpable</strong> de los músculos pélvicos ante la
          anticipación
        </li>
        <li>
          <strong>Dificultad para usar tampones</strong> o para tolerar la revisación
          ginecológica
        </li>
        <li>
          <strong>Ansiedad o evitación anticipatoria</strong>: miedo a las situaciones sexuales
          antes de que sucedan
        </li>
        <li>
          <strong>Culpa y frustración</strong> hacia una misma o hacia la pareja
        </li>
        <li>
          <strong>Disminución del deseo sexual</strong> como mecanismo de evitación del dolor
        </li>
      </ul>
      <p>
        Si te identificás con varios de estos puntos, es importante que consultes con un
        profesional. El diagnóstico diferencial con otras condiciones como la vulvodinia o la
        dispareunia requiere una evaluación clínica.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Tiene cura el vaginismo?
      </h2>
      <p>
        <strong>Sí. El vaginismo es una condición tratable con muy alta tasa de éxito.</strong>
      </p>
      <p>
        Esto es lo más importante que quiero que te lleves de esta guía. No es una
        condición crónica inevitable, no es "así sos vos", no es un defecto. Es una
        respuesta aprendida del sistema nervioso que, con el abordaje adecuado, se puede
        modificar.
      </p>
      <p>
        La evidencia científica respalda el enfoque cognitivo-conductual para el tratamiento
        del vaginismo, con resultados muy positivos incluso en casos de larga data. Las
        personas que se someten a tratamiento especializado en sexología clínica logran, en
        su gran mayoría, superar el vaginismo y tener relaciones sexuales sin dolor.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Tratamiento del vaginismo: enfoque sexológico cognitivo-conductual
      </h2>
      <p>
        El tratamiento que utilizo en consulta integra componentes cognitivos, conductuales
        y corporales. No hay atajos ni soluciones mágicas, pero sí hay un proceso claro y
        graduado que funciona.
      </p>

      <h3 className="text-xl font-semibold mt-6">1. Psicoeducación</h3>
      <p>
        Entender qué está pasando en el cuerpo es el primer paso terapéutico. Cuando la
        persona comprende el mecanismo del vaginismo —que es una contracción refleja, no una
        "decisión" del cuerpo de rechazar a la pareja—, el nivel de culpa y de ansiedad baja
        considerablemente. Este solo cambio cognitivo ya tiene un efecto terapéutico.
      </p>

      <h3 className="text-xl font-semibold mt-6">2. Trabajo con creencias y cogniciones</h3>
      <p>
        Identificamos y cuestionamos las creencias que alimentan la respuesta de miedo: "el
        sexo tiene que doler", "mi cuerpo está roto", "si no puedo tener sexo penetrativo
        no soy suficiente". Muchas de estas creencias están tan internalizadas que la persona
        no las reconoce como creencias sino como hechos.
      </p>

      <h3 className="text-xl font-semibold mt-6">3. Técnicas de relajación y conciencia corporal</h3>
      <p>
        Trabajamos con el sistema nervioso para bajar el nivel de activación ante los
        estímulos que generan ansiedad. Esto incluye respiración diafragmática, mindfulness
        corporal y técnicas de regulación del estrés.
      </p>

      <h3 className="text-xl font-semibold mt-6">4. Dilatación progresiva (desensibilización gradual)</h3>
      <p>
        Esta es la parte conductual del tratamiento. A través de un proceso gradual y
        completamente controlado por la persona —nunca por la pareja ni por el terapeuta—,
        se va aumentando la tolerancia a la penetración de forma progresiva. Se utilizan
        dilatadores vaginales de distintos tamaños, comenzando por los más pequeños.
      </p>
      <p>
        La clave es que el proceso ocurra en un estado de baja ansiedad, sin dolor, y
        completamente a ritmo de la persona. No hay apuro ni metas externas. El objetivo
        no es "llegar a cierto tamaño": es que el cuerpo aprenda que la penetración no es
        una amenaza.
      </p>

      <h3 className="text-xl font-semibold mt-6">5. Trabajo con la pareja (cuando aplica)</h3>
      <p>
        En muchos casos, incluir a la pareja en el proceso terapéutico mejora notablemente
        los resultados. La pareja aprende a acompañar sin presionar, entiende el mecanismo
        del vaginismo, y trabaja en la comunicación y en la resignificación de la intimidad
        más allá de la penetración.
      </p>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        ¿Cuántas sesiones lleva el tratamiento?
      </h2>
      <p>
        No hay una respuesta única, porque cada persona es diferente. Lo que sí puedo
        decirte con confianza es que el proceso tiene un inicio, un desarrollo y un final:
        no es una terapia interminable.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Casos sin trauma complejo:</strong> 3 a 5 meses en promedio, con sesiones
          cada 2–4 semanas.
        </li>
        <li>
          <strong>Casos con historia de trauma o con muchos años de vaginismo:</strong> puede
          extenderse a 6–12 meses, y en algunos casos conviene el trabajo paralelo con
          psicoterapia individual de trauma.
        </li>
        <li>
          <strong>Progreso en casa:</strong> el trabajo entre sesiones —con los ejercicios de
          dilatación y relajación— es fundamental. Las sesiones marcan el camino, pero el
          avance real ocurre en el día a día.
        </li>
      </ul>

      <h2
        className="text-2xl font-bold mt-10"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Cómo es la terapia para vaginismo conmigo
      </h2>
      <p>
        Atiendo de forma presencial en Pocitos, Montevideo, y también online para todo
        Uruguay y el exterior. Muchas personas prefieren el formato online para este tipo
        de trabajo porque les da más privacidad y comodidad, especialmente para los
        ejercicios en casa.
      </p>
      <p>
        La primera sesión es una consulta de evaluación. Hablamos de tu historia, de cómo
        se manifiesta el vaginismo en tu caso, de tus objetivos y de cualquier pregunta que
        tengas. No hay examen físico en la consulta —eso, si es necesario, lo coordino con
        ginecóloga.
      </p>
      <p>
        Mi enfoque es clínico pero también humano. Trabajo sin juicio, sin prisa y con total
        respeto por el ritmo de cada persona. El vaginismo no es una condición vergonzosa:
        es algo que le pasa al cuerpo, y como cualquier cosa que le pasa al cuerpo, puede
        atenderse con profesionalismo y cuidado.
      </p>
      <p>
        Si querés dar el primer paso, podés{" "}
        <Link
          href="/contacto"
          className="underline"
          style={{ color: "var(--lavender-dark)" }}
        >
          escribirme desde acá
        </Link>{" "}
        o conocer más sobre cómo trabajo en{" "}
        <Link
          href="/terapia-sexual"
          className="underline"
          style={{ color: "var(--lavender-dark)" }}
        >
          terapia sexual
        </Link>
        .
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

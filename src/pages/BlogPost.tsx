import { useParams, Navigate, useNavigate } from "react-router-dom";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

import blogHeroImage from "@/assets/blog-hero.jpg";
import blogTcmImage from "@/assets/blog-tcm.jpg";
import blogFunctionalImage from "@/assets/blog-functional.jpg";
import blogFertilityImage from "@/assets/blog-fertility.jpg";
import blogWellnessImage from "@/assets/blog-wellness.jpg";
import blogAcneMtcImage from "@/assets/blog-acne-mtc.jpg";
import blogAcupunctureImage from "@/assets/blog-acupuncture-illustration.jpg";
import blogHerbalTeaImage from "@/assets/blog-herbal-tea.jpg";
import blogFatigaImage from "@/assets/blog-fatiga.jpg";
import blogFatigaIllustration from "@/assets/blog-fatiga-illustration.jpg";
import blogEmocionesHero from "@/assets/blog-emociones-hero.jpg";
import blogEmocionesOrganos from "@/assets/blog-emociones-organos.jpg";
import blogVitaminaDHero from "@/assets/blog-vitamina-d-hero.jpg";
import blogVitaminaDSol from "@/assets/blog-vitamina-d-sol.jpg";
import blogPostnatalHero from "@/assets/blog-postnatal-hero.jpg";
import blogPostnatalNutricion from "@/assets/blog-postnatal-nutricion.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogPosts = {
    "cuidado-madre-postnatal-medicina-china-funcional": {
      title: "El arte de cuidar a la madre: sabiduría postnatal desde la Medicina China y la Medicina Funcional",
      author: "Sara Tamayo",
      date: "5 de Noviembre, 2024",
      category: "Medicina Integrativa",
      image: blogPostnatalHero,
      content: `
        <p>En muchas culturas, el nacimiento de un bebé se celebra como el inicio de una nueva vida. Pero pocas reconocen con tanta profundidad como la Medicina Tradicional China (MTC) que también nace una madre. Después del parto, el cuerpo, la mente y la energía vital atraviesan una transformación profunda que requiere cuidado, nutrición y tiempo.</p>
        
        <p>En China y Taiwán, este periodo sagrado se conoce como "Zuo Yue Zi" (坐月子), que significa literalmente "sentarse durante un mes". Es un tiempo de recuperación y renacimiento, en el que la madre recibe apoyo constante para sanar, restaurar su energía (Qi) y nutrir su sangre (Xue). En Saori, retomamos esta sabiduría ancestral y la integramos con la Medicina Funcional, ofreciendo acompañamiento personalizado para el bienestar postnatal.</p>

        <h2>La visión tradicional: reposo, calor y contención</h2>
        
        <p>La MTC enseña que durante el parto, la mujer experimenta una gran pérdida de sangre y energía vital. El cuerpo queda en un estado de vulnerabilidad, en el que el Qi, la Sangre y el Yang deben ser protegidos y reconstruidos. Por eso, la cuarentena postparto se centra en tres pilares:</p>

        <h3>1. Reposo absoluto:</h3>
        <p>El cuerpo necesita tiempo para cerrar los canales energéticos abiertos durante el parto. En la tradición china, se evita el frío, los esfuerzos y las corrientes de aire, pues podrían debilitar el Yang y generar desequilibrios a largo plazo (como fatiga crónica, dolores articulares o depresión postparto).</p>

        <h3>2. Nutrición cálida y tonificante:</h3>
        <p>Se priorizan los alimentos cocidos, caldos de huesos, sopas de pollo, raíces, jengibre, dátiles rojos y sésamo negro. Estos ingredientes nutren la sangre, fortalecen el bazo y el estómago, y ayudan al cuerpo a producir leche materna de buena calidad.</p>

        <h3>3. Contención emocional y vínculo:</h3>
        <p>Se reconoce que el alma también necesita descanso. La madre debe sentirse cuidada, sostenida y rodeada de tranquilidad. Este soporte emocional es esencial para equilibrar el corazón y el hígado, y permitir una recuperación profunda.</p>

        <h2>La mirada de la Medicina Funcional: restaurar desde lo biológico</h2>
        
        <p>Desde la Medicina Funcional, entendemos que el puerperio implica un proceso intenso de regeneración:</p>
        
        <ul>
          <li>Los niveles hormonales (estrógeno, progesterona, cortisol y tiroides) se reajustan.</li>
          <li>El sistema inmunológico se reorganiza.</li>
          <li>El intestino y el microbioma necesitan apoyo para volver al equilibrio.</li>
          <li>Y el sistema nervioso, muchas veces sobrecargado por la falta de sueño y el estrés, requiere contención.</li>
        </ul>

        <p>Por eso, en Saori acompañamos este proceso con un enfoque integral que puede incluir:</p>
        
        <ul>
          <li>Evaluación funcional personalizada, con estudios de micronutrientes, tiroides y ejes hormonales.</li>
          <li>Suplementación guiada por médico, con nutrientes clave como hierro, magnesio, vitamina D, omega 3 y probióticos específicos.</li>
          <li>Apoyo adaptógeno suave.</li>
          <li>Acupuntura postnatal, que ayuda a equilibrar el Qi, mejorar el estado emocional y favorecer la lactancia.</li>
        </ul>

        <h2>Recomendaciones prácticas para el postparto</h2>
        
        <img src="${blogPostnatalNutricion}" alt="Nutrición postnatal según Medicina China" class="w-full rounded-lg my-6" />

        <ol>
          <li><strong>Prioriza el descanso:</strong> dormir cuando el bebé duerme no es un cliché, es una necesidad fisiológica y energética.</li>
          <li><strong>Come caliente y despacio:</strong> los alimentos fríos y crudos pueden debilitar el bazo y enlentecer la recuperación.</li>
          <li><strong>Evita el exceso de estímulos:</strong> las pantallas, el ruido o las visitas excesivas pueden alterar el Shen (espíritu).</li>
          <li><strong>Rodéate de apoyo:</strong> una red amorosa, pareja o familia presente es medicina emocional.</li>
          <li><strong>Escucha tu cuerpo:</strong> la recuperación no es igual para todas, y cada cuerpo tiene su propio ritmo de sanación.</li>
        </ol>

        <h2>Conclusión</h2>
        
        <p>En Saori, creemos que el cuidado postnatal es un arte y una oportunidad para honrar la transformación que vive la mujer al convertirse en madre.</p>
        
        <p>Combinamos la sabiduría milenaria de la Medicina China con la precisión de la Medicina Funcional, ofreciendo un acompañamiento médico, emocional y energético que sostiene a la madre mientras recupera su fuerza y equilibrio.</p>
        
        <p><strong>Y cuando una madre es cuidada, toda la familia sana con ella.</strong></p>
      `,
    },
    "vitamina-d-hormona-sol-energia-vital": {
      title: "Vitamina D: la hormona del sol y su papel en la energía vital",
      author: "Sara Tamayo",
      date: "30 de Octubre, 2024",
      category: "Medicina Funcional",
      image: blogVitaminaDHero,
      content: `
        <p>Durante los últimos años, la vitamina D ha pasado de ser vista como un simple nutriente para los huesos a considerarse una hormona esencial para la salud integral. Sus efectos van mucho más allá del sistema óseo: influye en el equilibrio hormonal, inmunitario, emocional y energético.</p>
        
        <p>Desde la Medicina Funcional, se entiende como un regulador clave de múltiples sistemas corporales.</p>
        
        <p>Desde la Medicina Tradicional China (MTC), podríamos relacionarla con la energía del Yang del Riñón y con el Qi defensivo (Wei Qi), responsables de la vitalidad, la inmunidad y la conexión con la luz solar.</p>

        <h2>Vitamina D desde la Medicina Funcional</h2>
        
        <p>La vitamina D es una prohormona liposoluble que el cuerpo sintetiza al exponerse a la luz solar. Sin embargo, factores como el trabajo en interiores, el uso constante de protector solar, la contaminación o ciertos trastornos digestivos han hecho que su deficiencia sea cada vez más frecuente.</p>

        <h3>Funciones clave:</h3>
        <ul>
          <li><strong>Regulación inmunológica:</strong> modula las respuestas inflamatorias y ayuda a prevenir infecciones respiratorias, autoinmunidad y fatiga crónica.</li>
          <li><strong>Equilibrio hormonal:</strong> participa en la función tiroidea, la producción de testosterona y progesterona, y en el metabolismo del calcio y fósforo.</li>
          <li><strong>Salud mental y emocional:</strong> niveles adecuados se asocian con mejor ánimo y menor riesgo de depresión o ansiedad.</li>
          <li><strong>Energía celular:</strong> estimula la función mitocondrial y favorece la producción de ATP (energía).</li>
        </ul>

        <h3>Causas comunes de deficiencia:</h3>
        <ul>
          <li>Falta de exposición solar.</li>
          <li>Alteraciones intestinales o hepáticas que dificultan la absorción.</li>
          <li>Dietas muy bajas en grasas saludables.</li>
          <li>Uso prolongado de ciertos medicamentos (como corticoides o anticonvulsivantes).</li>
        </ul>

        <p>En Medicina Funcional, se recomienda evaluar los niveles séricos de 25(OH) vitamina D y mantenerlos entre 50 y 80 ng/mL para una función óptima.</p>
        
        <p>La suplementación debe ser siempre guiada por un profesional de la salud, ajustando la dosis a las necesidades individuales y controlando los niveles cada 3 a 6 meses.</p>

        <h2>Cómo optimizar tus niveles naturalmente</h2>
        
        <img src="${blogVitaminaDSol}" alt="Optimizando niveles de Vitamina D naturalmente" class="w-full rounded-lg my-6" />

        <ol>
          <li><strong>Exposición solar inteligente:</strong> 15–20 minutos al día en brazos y piernas, evitando las horas de máxima radiación.</li>
          <li><strong>Incluir fuentes naturales:</strong> pescados grasos, yema de huevo, mantequilla orgánica, hongos expuestos al sol.</li>
          <li><strong>Combinar con grasas saludables:</strong> aguacate, aceite de oliva o frutos secos mejoran su absorción.</li>
          <li><strong>Suplementación guiada por médico:</strong> la vitamina D3, acompañada de vitamina K2, favorece su correcta utilización ósea y cardiovascular.</li>
          <li><strong>Medición periódica:</strong> controlar tus niveles es la mejor forma de ajustar la dosis y mantener el equilibrio.</li>
        </ol>

        <h2>Conclusión</h2>
        
        <p>La vitamina D nos recuerda la importancia del vínculo entre el cuerpo, la naturaleza y la luz solar.</p>
        
        <p>Así como las plantas necesitan sol para florecer, nuestro cuerpo y espíritu también requieren esa energía luminosa para mantener su equilibrio interno.</p>
      `,
    },
    "emociones-medicina-china-cuerpo-alma": {
      title: "Las Emociones desde la Medicina China: Cuando el Cuerpo Habla lo que el Alma Siente",
      author: "Sara Tamayo",
      date: "25 de Octubre, 2024",
      category: "Medicina Tradicional China",
      image: blogEmocionesHero,
      content: `
        <p>En Medicina Tradicional China (MTC), cada emoción tiene una energía propia que circula a través del cuerpo. No se ve como algo "mental", sino como una fuerza que puede nutrir o desequilibrar los órganos. Cuando una emoción se vive con intensidad, o se reprime por mucho tiempo, esa energía se estanca, generando síntomas físicos, fatiga o incluso enfermedad.</p>
        
        <p>La Medicina Funcional también reconoce esta conexión. Hoy sabemos que el estrés emocional sostenido altera el eje hipotálamo-hipófisis-suprarrenal (HPA), afecta el microbioma intestinal, el sueño y las hormonas. En otras palabras, lo que sentimos deja huellas en el cuerpo.</p>
        
        <p>En Saori, vemos las emociones como mensajes del cuerpo, que nos invitan a restablecer el equilibrio interno.</p>

        <h2>Las Siete Emociones y sus Órganos Asociados</h2>
        
        <img src="${blogEmocionesOrganos}" alt="Las siete emociones y los órganos en Medicina China" class="w-full rounded-lg my-6" />

        <h3>Ira – Hígado</h3>
        <p>La ira, frustración o resentimiento bloquean el flujo natural del Qi del Hígado, generando tensión muscular, digestión lenta, dolor de cabeza o acné.</p>
        
        <p>Cuando el Qi del Hígado fluye, nos sentimos creativos, flexibles y con visión clara.</p>
        
        <p><strong>Sabores que armonizan:</strong></p>
        <p>El sabor ácido tonifica suavemente el Hígado. Incluye alimentos como limón, vinagre de manzana, frutas cítricas en pequeñas cantidades.</p>
        <p>Evita excesos, ya que mucho ácido puede dañar el estómago.</p>
        
        <p><strong>Desde la Medicina Funcional:</strong></p>
        <p>Apoya la función hepática con crucíferas (brócoli, col, kale), diente de león, cúrcuma y suficiente hidratación, ayudan a reducir el impacto del estrés oxidativo sobre el hígado.</p>

        <h3>Alegría – Corazón</h3>
        <p>La alegría equilibra y expande, pero en exceso —como euforia o hiperactividad mental— puede agotar el Shen (mente-espíritu) y causar insomnio, palpitaciones o ansiedad.</p>
        
        <p>Un corazón equilibrado refleja serenidad, conexión y risa genuina.</p>
        
        <p><strong>Sabores que armonizan:</strong></p>
        <p>El sabor amargo nutre el corazón y drena el exceso de calor. Puedes incluir cacao puro, rúgula, espinaca, alcachofa, té verde o infusión de flor de loto.</p>
        
        <p><strong>Desde la Medicina Funcional:</strong></p>
        <p>Favorece la coherencia cardíaca y el equilibrio nervioso con técnicas de respiración, magnesio glicinato y omega 3. Dormir adecuadamente antes de las 11 p.m. protege el ritmo circadiano del corazón.</p>

        <h3>Preocupación – Bazo y Estómago</h3>
        <p>Pensar demasiado o vivir en constante preocupación debilita el Qi del Bazo, generando digestión lenta, pesadez, antojos de dulces o niebla mental.</p>
        
        <p>Cuando el Bazo está fuerte, hay claridad mental, concentración y estabilidad emocional.</p>
        
        <p><strong>Sabores que armonizan:</strong></p>
        <p>El sabor dulce natural (no refinado) tonifica el Bazo: camote, calabaza, dátiles rojos, avena tibia y caldos.</p>
        <p>Evita azúcares procesados, que debilitan aún más la digestión.</p>
        
        <p><strong>Desde la Medicina Funcional:</strong></p>
        <p>Apoya la microbiota intestinal con probióticos y alimentos fermentados. Elimina el exceso de azúcares y ultraprocesados que generan alteración del microbioma intestinal.</p>

        <h3>Tristeza – Pulmón</h3>
        <p>La tristeza y la melancolía contraen la energía del Pulmón, debilitando la inmunidad y el ánimo. Cuando los pulmones están en equilibrio, respiramos con profundidad y vivimos con apertura emocional.</p>
        
        <p><strong>Sabores que armonizan:</strong></p>
        <p>El sabor picante suave ayuda a mover el Qi y liberar la energía estancada. Jengibre, cebolla, ajo, rábano y canela son excelentes aliados.</p>
        <p>Evita el picante excesivo, que puede secar los líquidos del Pulmón.</p>
        
        <p><strong>Desde la Medicina Funcional:</strong></p>
        <p>Fortalece el sistema inmunológico con vitamina C, zinc y una respiración consciente. Caminar al aire libre y practicar gratitud ayudan a abrir el pecho y mover la energía del Pulmón.</p>

        <h3>Miedo – Riñón</h3>
        <p>El miedo y la inseguridad afectan la energía del Riñón, raíz de la vitalidad y del Jing (esencia). Su agotamiento se refleja en cansancio profundo, caída del cabello, insomnio o pérdida de motivación.</p>
        
        <p>Cuando los Riñones están fuertes, hay confianza, voluntad y serenidad interior.</p>
        
        <p><strong>Sabores que armonizan:</strong></p>
        <p>El sabor salado natural (no refinado) nutre el Riñón: algas, miso, semillas de sésamo, nueces y pescados marinos.</p>
        <p>Evita el exceso de sal, que agota los líquidos corporales.</p>
        
        <p><strong>Desde la Medicina Funcional:</strong></p>
        <p>Apoya la función adrenal y renal con adaptógenos como ashwagandha y rhodiola, magnesio y descanso profundo. Dormir temprano y mantener rutinas.</p>

        <h2>Conclusión</h2>
        <p>En Saori trabajamos con acupuntura, nutrición energética, adaptógenos y medicina funcional personalizada, buscando que cada paciente recupere no solo la salud física, sino también su centro emocional. Las emociones son energía en movimiento, mensajeras que nos indican dónde hay un desequilibrio o una necesidad no escuchada.</p>
        
        <p>Cuando aprendemos a sentir sin reprimir y a cuidar el cuerpo desde su energía y su biología restauramos la armonía.</p>
      `,
    },
    "fatiga-cronica-tratamiento-medicina-funcional-china": {
      title: "Fatiga Crónica: Causas, Tratamiento y Abordaje Integrativo desde la Medicina Funcional y la Medicina China",
      author: "Sara Tamayo",
      date: "20 de Octubre, 2024",
      category: "Medicina Integrativa",
      image: blogFatigaImage,
      content: `
        <p>Sentirse cansado después de un día intenso es normal. Pero cuando el agotamiento se vuelve constante, dormir ya no recupera y la energía nunca alcanza, hablamos de fatiga crónica.</p>
        
        <p>Este síntoma afecta a miles de personas y suele tener múltiples causas: desde desequilibrios hormonales hasta alteraciones digestivas o emocionales. En Saori lo abordamos con una visión integrativa, uniendo la Medicina Funcional y la Medicina Tradicional China (MTC) para encontrar la raíz y restaurar la vitalidad.</p>

        <h2>¿Por qué estoy cansado todo el tiempo?</h2>
        <p>La fatiga crónica no es una enfermedad en sí misma, sino una señal de que algo en el cuerpo no está funcionando en equilibrio.</p>
        
        <p>Algunas causas frecuentes son:</p>
        <ul>
          <li><strong>Disfunción mitocondrial</strong> (la "fábrica de energía" de las células no produce suficiente ATP).</li>
          <li><strong>Desequilibrios hormonales:</strong> tiroides, cortisol o DHEA alterados.</li>
          <li><strong>Deficiencias nutricionales:</strong> vitamina B, hierro, magnesio, vitamina D.</li>
          <li><strong>Problemas digestivos y de microbiota:</strong> intestino permeable, disbiosis, inflamación.</li>
          <li><strong>Estrés crónico:</strong> sobrecarga del eje HPA (hipotálamo-hipófisis-suprarrenal).</li>
        </ul>
        
        <p>En Medicina Funcional utilizamos exámenes de laboratorio personalizados para evaluar estas áreas y diseñar un plan basado en evidencia.</p>

        <h2>La visión de la Medicina China sobre la fatiga</h2>
        
        <img src="${blogFatigaIllustration}" alt="Medicina China y fatiga crónica" class="w-full rounded-lg my-6" />
        
        <p>La MTC entiende la fatiga como un reflejo de desequilibrios en el Qi (energía vital). Los patrones más comunes son:</p>
        <ul>
          <li><strong>Deficiencia de Qi de Bazo y Estómago:</strong> cansancio después de comer, digestión lenta, pesadez.</li>
          <li><strong>Deficiencia de Riñón:</strong> fatiga profunda, dolor lumbar, debilidad, sensación de frío.</li>
          <li><strong>Estancamiento de Qi de Hígado:</strong> fatiga emocional, irritabilidad, tensión muscular.</li>
          <li><strong>Deficiencia de Yin o Sangre:</strong> agotamiento mental, insomnio, palidez, mareos.</li>
        </ul>

        <p>Con acupuntura, fitoterapia, nutrición energética y técnicas de respiración buscamos armonizar cuerpo y mente, fortalecer el Qi y recuperar vitalidad.</p>

        <h2>Estrategias integrativas para recuperar la energía</h2>
        <p>En nuestra clínica combinamos ambas miradas para un abordaje completo:</p>

        <h3>1. Nutrición terapéutica</h3>
        <ul>
          <li><strong>Funcional:</strong> proteínas de calidad, omega 3, carbohidratos de bajo índice glucémico, evitar azúcares refinados.</li>
          <li><strong>MTC:</strong> comidas calientes, fáciles de digerir, sopas y caldos que fortalezcan el bazo y la energía.</li>
        </ul>

        <h3>2. Regulación del estrés y sueño</h3>
        <ul>
          <li><strong>Funcional:</strong> adaptógenos como ashwagandha y rhodiola, magnesio, apoyo al ritmo circadiano.</li>
          <li><strong>MTC:</strong> dormir antes de las 11 p.m. para respetar el ciclo del hígado, acupuntura para relajación profunda.</li>
        </ul>

        <h3>3. Acupuntura y estimulación energética</h3>
        <ul>
          <li>Tonifica el Qi del bazo y riñón.</li>
          <li>Libera bloqueos emocionales del hígado.</li>
          <li>Mejora la calidad del sueño y regula el sistema nervioso.</li>
        </ul>

        <h3>4. Apoyo herbal y suplementos</h3>
        <ul>
          <li><strong>MTC:</strong> astrágalo, ginseng, reishi, dátiles rojos para fortalecer energía y sangre.</li>
          <li><strong>Funcional:</strong> complejo B, vitamina D, coenzima Q10 y L-carnitina para potenciar energía mitocondrial.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>La fatiga tiene múltiples causas y requiere una mirada detallada y personalizada.</p>
        
        <p>En Saori acompañamos a cada paciente a identificar la raíz de su desequilibrio y diseñamos un plan que une lo mejor de ambas medicinas para recuperar tu energía vital.</p>
        
        <p><strong>¿Te identificas con estos síntomas?</strong></p>
        
        <p>Agenda una cita con nosotros y da el primer paso hacia la recuperación de tu bienestar.</p>
      `,
    },
    "acne-medicina-tradicional-china-mirada-integral": {
      title: "Acné y Medicina Tradicional China: Una Mirada Integral para Sanar la Piel",
      author: "Sara Tamayo",
      date: "15 de Octubre, 2024",
      category: "Medicina Tradicional China",
      image: blogAcneMtcImage,
      content: `
        <p>El acné es uno de los problemas de piel más comunes y frustrantes, y muchas veces se aborda solo desde lo superficial. Sin embargo, la Medicina Tradicional China (MTC) nos enseña que la piel refleja el estado interno de nuestro organismo. Los brotes, la inflamación y las manchas son señales de desequilibrios más profundos que podemos corregir al mirar el cuerpo como un sistema interconectado.</p>

        <p>Como médica en Medicina Tradicional China, atravesé mi propio proceso con el acné y descubrí que la verdadera sanación requiere una visión integral. Hoy quiero compartir contigo las tres estrategias que transformaron mi piel y mi salud, todas basadas en los principios de la MTC.</p>

        <h2>1. Fortalecer el intestino: el poder del elemento Tierra</h2>
        <p>En MTC, el bazo y el estómago forman el elemento Tierra, encargado de nutrir y sostener todo el cuerpo. Cuando este sistema se debilita, aparecen la humedad, la inflamación y el acné.</p>
        
        <p><strong> Qué hice:</strong> cambié mi alimentación hacia comidas calientes, cocidas y fáciles de digerir (sopas, caldos, congee). Eliminé los alimentos fríos y crudos como ensaladas y batidos, que desde la MTC debilitan el "fuego digestivo" y generan humedad interna.</p>

        <p><strong> Apoyo extra:</strong> incorporé un probióticos, diseñado para equilibrar la microbiota intestinal. El resultado fue menos inflamación, mejor digestión y brotes más controlados.</p>
        
        <p><strong> Conclusión:</strong> cuando el elemento Tierra está fuerte, el cuerpo elimina toxinas de manera más eficiente y la piel se ve más clara y saludable.</p>

        <h2>2. Acupuntura semanal: equilibrar el Qi y dispersar el calor</h2>
        
        <img src="${blogAcupunctureImage}" alt="Acupuntura para el acné" class="w-full rounded-lg my-6" />
        
        <p>El acné suele relacionarse con exceso de calor y humedad en canales como hígado y estómago. La acupuntura semanal fue clave en mi recuperación:</p>
        <ul>
          <li>Reguló el flujo de Qi (energía vital).</li>
          <li>Disminuyó la inflamación y el enrojecimiento.</li>
          <li>Promovió un estado de calma profunda, reduciendo el impacto del estrés en mi piel.</li>
        </ul>
        
        <p> Además, integré la acupuntura cosmética, que mejora la circulación, estimula el colágeno y da un aspecto más luminoso, pero también actúa en el equilibrio interno del cuerpo.</p>
        
        <p><strong> Conclusión:</strong> la acupuntura no solo mejora la piel, también armoniza el sistema nervioso y hormonal, generando cambios duraderos.</p>

        <h2>3. Dormir antes de las 11 PM: cuidar al hígado y equilibrar hormonas</h2>
        <p>En MTC, el hígado es responsable de detoxificar la sangre, regular las emociones y el Qi. Su horario de máxima actividad es entre las 11:00 p.m. y las 3:00 a.m.</p>
        
        <p><strong>Qué hice:</strong> establecí el hábito de dormir antes de las 11 p.m.</p>
        
        <p><strong>Resultados:</strong> mejor descanso, piel más clara, menos brotes hormonales y mayor estabilidad emocional.</p>
        
        <p><strong>Conclusión:</strong> respetar los ritmos del hígado es un paso simple pero poderoso para cuidar la piel y la salud integral.</p>

        <h2>Mis infusiones favoritas para la piel</h2>
        
        <img src="${blogHerbalTeaImage}" alt="Infusiones herbales para la piel" class="w-full rounded-lg my-6" />
        
        <p>La fitoterapia es un pilar en MTC y me acompañó en este proceso. Te comparto algunas hierbas fáciles de incorporar en tu rutina:</p>
        <ul>
          <li><strong>Menta:</strong> ayuda a liberar calor del hígado y reduce el estrés.</li>
          <li><strong>Bayas de goji:</strong> antioxidantes, nutren la sangre y la piel.</li>
          <li><strong>Dátiles rojos (jujube):</strong> tonifican el Qi y aportan luminosidad.</li>
          <li><strong>Raíz de diente de león:</strong> depura hígado y estómago.</li>
        </ul>

        <p>Sanar el acné no es un proceso rápido ni superficial. Requiere paciencia, constancia y confianza en la sabiduría del cuerpo. Mi experiencia con la Medicina Tradicional China me enseñó que cuando cuidamos la digestión, equilibramos el Qi con acupuntura y apoyamos el hígado con un buen descanso, la piel responde con claridad y vitalidad.</p>
        
        <p><strong> Si estás lidiando con acné, recuerda:</strong> tu piel no es tu enemiga, es un mensajero. Escuchar sus señales puede ser el inicio de una transformación profunda, no solo en tu piel, sino en tu bienestar general.</p>
      `,
    },
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return <Navigate to="/404" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Medicina Integrativa": "bg-primary text-primary-foreground",
      Fertilidad: "bg-accent text-accent-foreground",
      "Medicina Funcional": "bg-secondary text-secondary-foreground",
      "Medicina Tradicional China": "bg-primary/80 text-primary-foreground",
      Bienestar: "bg-accent/80 text-accent-foreground",
      Nutrición: "bg-secondary/80 text-secondary-foreground",
    };
    return colors[category as keyof typeof colors] || "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen bg-sage">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-sage pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            {/* Left spacer - aligns with logo */}
            <div className="w-[calc(32px+8px+theme(spacing.6))]"></div>

            {/* Title and author container */}
            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[1.1] tracking-tight">
                {currentPost.title}
              </h1>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{currentPost.author}</div>
                    <div className="text-sm text-muted-foreground">{currentPost.date}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right spacer - aligns with social icons */}
            <div className="w-[calc(theme(spacing.4)+theme(spacing.5)+theme(spacing.2)+theme(spacing.4)+theme(spacing.5)+theme(spacing.2))]"></div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 mt-12">
          <div className="flex justify-between">
            {/* Left spacer - aligns with logo */}
            <div className="w-[calc(32px+8px+theme(spacing.6))]"></div>

            {/* Image container */}
            <div className="flex-1">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img src={currentPost.image} alt={currentPost.title} className="w-full h-full object-cover" />
              </div>
              {/* Divider line below image */}
              <div className="w-full h-1 bg-gray-400 mt-8"></div>
            </div>

            {/* Right spacer - aligns with social icons */}
            <div className="w-[calc(theme(spacing.4)+theme(spacing.5)+theme(spacing.2)+theme(spacing.4)+theme(spacing.5)+theme(spacing.2))]"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            {/* Left spacer - aligns with logo */}
            <div className="w-[calc(32px+8px+theme(spacing.6))]"></div>

            {/* Content */}
            <div className="flex-1 max-w-none">
              <div
                className="text-justify"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "17px",
                  lineHeight: "1.6",
                  color: "#333333",
                }}
                dangerouslySetInnerHTML={{
                  __html: currentPost.content
                    .replace(
                      /<p>/g,
                      '<p style="margin-bottom: 1.5rem; font-size: 17px; line-height: 1.6; color: #333333;">',
                    )
                    .replace(
                      /<h2>/g,
                      "<h2 style=\"font-size: 21px; font-weight: bold; margin-top: 24px; margin-bottom: 16px; color: #333333; font-family: Georgia, 'Times New Roman', serif;\">",
                    )
                    .replace(/<ul>/g, '<ul style="margin-bottom: 1.5rem; color: #333333;">')
                    .replace(
                      /<li>/g,
                      '<li style="margin-bottom: 8px; font-size: 17px; line-height: 1.6; color: #333333;">',
                    )
                    .replace(/<strong>/g, '<strong style="font-weight: bold; color: #333333;">'),
                }}
              />
            </div>

            {/* Right spacer - aligns with social icons */}
            <div className="w-[calc(theme(spacing.4)+theme(spacing.5)+theme(spacing.2)+theme(spacing.4)+theme(spacing.5)+theme(spacing.2))]"></div>
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </div>
  );
};

export default BlogPost;

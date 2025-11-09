# ✅ CHECKLIST: Publicar Nuevo Post de Blog con SEO Optimizado

## 📝 ANTES DE ESCRIBIR

### 1. Keyword Research
- [ ] Buscar keyword principal en Ubersuggest (100-3000 búsquedas/mes, dificultad <50)
- [ ] Identificar 2-5 keywords secundarias relacionadas
- [ ] Buscar 3-5 long-tail keywords (preguntas específicas)
- [ ] Usar AnswerThePublic para preguntas comunes
- [ ] Verificar competencia en Google (primeras 10 posiciones)

**Ejemplo:**
```
Keyword principal: "tratamiento insomnio natural" (820 búsquedas/mes, dificultad 38)
Keywords secundarias:
- insomnio medicina tradicional china
- acupuntura para dormir
- remedios naturales insomnio
Long-tail:
- como curar insomnio con acupuntura
- medicina china para el insomnio que funciona
- tratamiento insomnio sin pastillas bogotá
```

---

## ✍️ ESTRUCTURA DEL POST

### 2. Título y Metadata (CRÍTICO)
- [ ] **Title Tag**: < 60 caracteres, incluir keyword principal + "| SAORI"
  - Ejemplo: "Insomnio: Tratamiento Natural con Medicina China | SAORI"
- [ ] **Meta Description**: 150-155 caracteres, problema + solución + CTA
  - Ejemplo: "¿No puedes dormir? Descubre cómo la acupuntura y medicina china tratan el insomnio desde la raíz. Consulta en Bogotá disponible."
- [ ] **URL Slug**: keyword-principal-keyword-secundaria
  - Ejemplo: `/blog/insomnio-tratamiento-natural-medicina-china`

### 3. Estructura de Contenido (2,200-2,800 palabras)
- [ ] **Introducción** (150-200 palabras)
  - Conectar emocionalmente con el lector
  - Incluir keyword principal en primer párrafo
  - Prometer solución clara

- [ ] **¿Qué es [Tema]?** (200-300 palabras)
  - Definición clara
  - Estadísticas si aplican
  - Keyword principal integrada naturalmente

- [ ] **Síntomas y Causas** (300-400 palabras)
  - H3 con long-tail keywords
  - Lista de síntomas comunes
  - Causas según medicina occidental

- [ ] **Visión desde la Medicina China** (250-350 palabras)
  - Explicar desde MTC
  - Conceptos: Qi, Yin/Yang, órganos
  - Keywords: medicina tradicional china, acupuntura

- [ ] **Visión desde la Medicina Funcional** (250-350 palabras)
  - Explicar desde medicina funcional
  - Causas raíz biológicas
  - Keywords: medicina funcional, análisis

- [ ] **CTA Intermedio**
  - "¿Te identificas con estos síntomas? Agenda tu primera consulta."
  - Enlace a `/primera-consulta`

- [ ] **Tratamiento Integral en SAORI** (300-400 palabras)
  - Describir enfoque integrativo
  - Mencionar acupuntura, hierbas, etc.
  - Beneficios específicos

- [ ] **Casos de Éxito / Testimonios** (200-300 palabras)
  - Historia anónima de paciente
  - Resultados específicos
  - Humanizar el tratamiento

- [ ] **Preguntas Frecuentes** (4-6 preguntas)
  - Usar preguntas reales de keyword research
  - Respuestas completas (50-100 palabras cada una)

- [ ] **Conclusión** (150-200 palabras + CTA final)
  - Resumir puntos clave
  - CTA fuerte: "Agenda tu consulta hoy"

---

## 🔍 OPTIMIZACIÓN ON-PAGE

### 4. Headings (H1, H2, H3)
- [ ] **1 H1** con keyword principal
- [ ] **4-8 H2** con keywords secundarias y variaciones
- [ ] **8-15 H3** con long-tail keywords y preguntas

**Ejemplo de estructura:**
```
H1: Insomnio: Tratamiento Natural con Medicina China y Funcional

H2: ¿Qué es el insomnio crónico?
H2: Síntomas y causas del insomnio
  H3: Síntomas comunes del insomnio
  H3: Causas del insomnio según la medicina occidental
H2: El insomnio desde la Medicina Tradicional China
  H3: Deficiencia de Yin del corazón
  H3: Estancamiento de Qi del hígado
H2: Abordaje funcional del insomnio
  H3: Disfunción del cortisol y melatonina
  H3: Deficiencias nutricionales que causan insomnio
H2: Tratamiento integral en SAORI
  H3: Acupuntura para el insomnio
  H3: Hierbas chinas para dormir mejor
H2: Casos de éxito
H2: Preguntas frecuentes sobre insomnio
  H3: ¿Cuántas sesiones de acupuntura necesito?
  H3: ¿La acupuntura funciona para insomnio crónico?
  H3: ¿Qué puedo hacer en casa para dormir mejor?
H2: Conclusión
```

### 5. Keywords y Densidad
- [ ] Keyword principal aparece en:
  - [ ] Primer párrafo (primeras 100 palabras)
  - [ ] URL
  - [ ] Title tag
  - [ ] Meta description
  - [ ] H1
  - [ ] Al menos 2 H2
  - [ ] Último párrafo
- [ ] Densidad keyword principal: 1-2% (no forzar)
- [ ] Keywords secundarias: 0.5-1% cada una
- [ ] Sinónimos y variaciones naturales

### 6. Imágenes (Mínimo 4)
- [ ] **Imagen hero**: Alta calidad, relevante al tema
  - Alt: "[Keyword principal] - [Descripción]"
  - Ejemplo: "Tratamiento de insomnio con acupuntura - Paciente en sesión"
- [ ] **Imágenes de apoyo**: 3-6 adicionales
  - Alt descriptivo con keywords cuando aplique
  - Tamaño optimizado (< 200KB ideal)
  - Formato WebP preferido
- [ ] Nombres de archivo con keywords:
  - `insomnio-acupuntura-tratamiento.jpg`
  - `medicina-china-insomnio.jpg`

---

## 🔗 ENLACES INTERNOS

### 7. Internal Linking (3-5 enlaces mínimo)
- [ ] Enlace a **página de servicio** relacionada
  - Ejemplo: "Conoce más sobre [Medicina Tradicional China](/medicina-tradicional-china)"
- [ ] Enlace a **Primera Consulta** (al menos 1 vez)
  - CTA: "[Agenda tu primera consulta](/primera-consulta)"
- [ ] Enlaces a **2-4 posts relacionados**
  - Ejemplo: "También te puede interesar: [Fatiga Crónica](/blog/fatiga-cronica-tratamiento)"
- [ ] Anchor text descriptivo (no "haz clic aquí")

---

## 📊 SCHEMAS Y METADATA

### 8. Agregar a `blogPostsSEO.ts`
```typescript
"tu-nuevo-slug": {
  slug: "tu-nuevo-slug",
  title: "Título optimizado con keyword | SAORI",
  metaDescription: "Meta description 150-155 caracteres con CTA",
  keywords: [
    "keyword principal",
    "keyword secundaria 1",
    "keyword secundaria 2",
    "long tail keyword 1",
    "long tail keyword 2",
    // ... más keywords
  ],
  category: "Medicina Integrativa", // o "Medicina Funcional" o "Medicina Tradicional China"
  publishDate: "2024-11-XX...", // ISO 8601 format
  modifiedDate: "2024-11-XX...",
  readingTime: "PT10M", // PT[minutos]M
  author: "Dra. Sara Tamayo",
  faqs: [
    {
      question: "¿Pregunta común 1?",
      answer: "Respuesta completa y detallada de 50-100 palabras..."
    },
    // 4-6 FAQs total
  ]
}
```

### 9. FAQs (4-6 preguntas)
- [ ] Usar preguntas reales de AnswerThePublic
- [ ] Respuestas completas (50-100 palabras)
- [ ] Incluir keywords naturalmente
- [ ] Formato FAQ Schema JSON-LD (automático)

---

## 🖼️ ASSETS Y RECURSOS

### 10. Imágenes Requeridas
- [ ] Hero image del post (1920x1080 ideal)
- [ ] 3-6 imágenes de apoyo (1200x800 ideal)
- [ ] Todas optimizadas (< 200KB)
- [ ] Alt text descriptivo en todas

### 11. Agregar al Blog Index
- [ ] Actualizar array `blogPosts` en `src/pages/Blog.tsx`
- [ ] Agregar al `featuredBlog` si es destacado
- [ ] Importar imágenes necesarias

---

## 🚀 ANTES DE PUBLICAR

### 12. Checklist Final de Validación
- [ ] **Title tag** < 60 caracteres ✓
- [ ] **Meta description** 150-155 caracteres ✓
- [ ] **URL amigable** con keywords ✓
- [ ] **Keyword principal** en primer párrafo ✓
- [ ] **Mínimo 2,200 palabras** de contenido ✓
- [ ] **4-8 H2** con keywords ✓
- [ ] **8-15 H3** con long-tail ✓
- [ ] **4-6 FAQs** implementadas ✓
- [ ] **3-5 enlaces internos** relevantes ✓
- [ ] **Mínimo 4 imágenes** con alt text ✓
- [ ] **Reading time** calculado ✓
- [ ] **Fecha publicación** en ISO 8601 ✓
- [ ] **Schema BlogPosting** configurado (automático) ✓
- [ ] **Schema FAQ** configurado (automático) ✓
- [ ] **Breadcrumb** configurado (automático) ✓

### 13. Testing
- [ ] Probar URL en navegador
- [ ] Verificar meta tags con inspector
- [ ] Validar schemas en https://validator.schema.org/
- [ ] Verificar responsive design (móvil/tablet)
- [ ] Revisar ortografía y gramática
- [ ] Confirmar todos los enlaces funcionan

---

## 📈 POST-PUBLICACIÓN

### 14. Después de Publicar
- [ ] Actualizar `sitemap.xml` con nueva URL
- [ ] Notificar a Google Search Console (submit sitemap)
- [ ] Compartir en redes sociales
- [ ] Agregar enlaces desde posts antiguos relacionados
- [ ] Monitorear Analytics después de 48h
- [ ] Revisar ranking en 2 semanas

---

## 🎯 OBJETIVO FINAL

**Post listo para rankear en Google con:**
- ✅ Estructura SEO completa
- ✅ Keywords optimizadas
- ✅ Schemas implementados
- ✅ Enlaces internos estratégicos
- ✅ Contenido valioso (2,200-2,800 palabras)
- ✅ FAQs para rich snippets
- ✅ Imágenes optimizadas

**Tiempo estimado total**: 6-8 horas por post de calidad

---

**💡 TIP PRO**: Mantén este checklist visible mientras escribes. La consistencia en SEO es clave para resultados.

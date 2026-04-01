import { QuizScenario } from '../quizData';

export const case044: QuizScenario = {
  id: 'case-044',
  slug: 'citrate-toxicity-massive-transfusion',
  title: 'The Citrate Conundrum',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 45-year-old male is 2 hours into damage control laparotomy for multiple gunshot wounds to the abdomen. He has received massive transfusion protocol with 18 units PRBCs, 18 units FFP, and 2 apheresis platelet units (1:1:1 ratio). Current OR vitals: HR 118 bpm, BP 102/64 mmHg, RR 14/min (ventilated), Temp 36.8°C (98.2°F), SpO2 98%. The anesthesiologist reports new-onset perioral tingling and carpopedal spasm noted when the patient briefly emerged from anesthesia. Continuous ECG monitoring shows prolonged QTc interval of 520 ms (previously 420 ms). Labs: pH 7.28, lactate 4.2 mmol/L, INR 1.6, fibrinogen 180 mg/dL, ionized calcium 0.78 mmol/L (normal: 1.12-1.32 mmol/L), potassium 5.8 mEq/L, magnesium 1.4 mg/dL.',
  question: "What is the MOST appropriate immediate intervention for this patient's condition?",
  options: [
    { id: 'A', text: 'Administer calcium gluconate 2 grams IV and monitor ionized calcium levels every 30-60 minutes', isCorrect: true },
    { id: 'B', text: 'Decrease the rate of blood product transfusion to allow hepatic citrate metabolism to catch up', isCorrect: false },
    { id: 'C', text: 'Administer sodium bicarbonate to correct acidosis and improve calcium binding', isCorrect: false },
    { id: 'D', text: 'Administer magnesium sulfate 2 grams IV to correct the prolonged QTc interval', isCorrect: false },
    { id: 'E', text: 'Administer insulin and glucose to address the hyperkalemia before treating hypocalcemia', isCorrect: false }
  ],
  explanation: `**Correct Answer: Administer calcium gluconate 2 grams IV and monitor ionized calcium levels**

This patient demonstrates **citrate toxicity** with severe **hypocalcemia** during massive transfusion protocol.

**Clinical Pathophysiology:**

**Citrate in Blood Products:**
- **Anticoagulant**: Sodium citrate is used to preserve blood products by chelating calcium.
- **Citrate load**: Massive transfusion delivers citrate faster than the liver can metabolize it.

**Citrate Toxicity Mechanism:**
1. **Calcium chelation**: Citrate binds ionized calcium, creating severe hypocalcemia.
2. **Impaired coagulation**: Calcium is essential cofactor for coagulation cascade.
3. **Cardiac dysfunction**: Hypocalcemia impairs myocardial contractility and conduction.
4. **Neuromuscular effects**: Increased neuromuscular excitability.

**Manifestations of Citrate Toxicity/Hypocalcemia:**
- **Neuromuscular**: Perioral tingling, carpopedal spasm (Trousseau sign), tetany.
- **Cardiac**: **Prolonged QTc interval** (hallmark ECG finding), hypotension, arrhythmias.
- **Coagulation**: Worsened coagulopathy despite factor replacement.

**Management:**
**Calcium replacement** (Grade 1A recommendation):
- **Calcium gluconate**: 2 grams IV (preferred, less tissue irritation).
- **Monitoring**: Ionized calcium every 30-60 minutes during MTP.
- **Goal**: Maintain ionized calcium >1.0 mmol/L.

**Why Other Options are Incorrect:**
**B (Decrease transfusion rate)**: Reducing transfusion could worsen hemorrhagic shock and coagulopathy during active hemorrhage.
**C (Sodium bicarbonate)**: Alkalosis decreases ionized calcium further by increasing protein binding.
**D (Magnesium)**: While hypomagnesemia is present, the primary cause of prolonged QTc here is severe hypocalcemia.
**E (Hyperkalemia first)**: The mild hyperkalemia (5.8) is less immediate than severe hypocalcemia (0.78). Calcium also stabilizes cardiac membranes against hyperkalemia.`,
  references: ['Lancet (2016)', 'JAMA Network Open (2026)', 'Journal of Surgical Research (2016)', 'Transfusion (2021)', 'Anesthesia & Analgesia (2021)']
};

import { QuizScenario } from '../quizData';

export const case043: QuizScenario = {
  id: 'case-043',
  slug: 'tccc-junctional-hemorrhage',
  title: 'Tactical Combat Casualty Care',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 26-year-old male soldier sustains a blast injury in combat. During tactical field care, a tourniquet was applied to the right lower extremity for massive hemorrhage from a traumatic above-knee amputation. The tourniquet has been in place for 90 minutes during evacuation. Upon arrival at the forward surgical team, ABCDE assessment: Airway patent, Breathing 28/min, Circulation shows weak central pulses. Vitals: HR 138 bpm, BP 76/48 mmHg, RR 28/min, Temp 35.2°C (95.4°F), SpO2 96% on high-flow oxygen. SAMPLE: no medications, no medical history. The tourniquet is noted to be properly placed and effective. However, examination also reveals a large expanding hematoma in the right groin with active bleeding from a junctional injury at the femoral triangle that was not initially apparent. The patient has received 2 units O-positive whole blood during transport.',
  question: 'What is the MOST appropriate immediate hemorrhage control intervention for the junctional injury?',
  options: [
    { id: 'A', text: 'Remove the limb tourniquet and apply a junctional tourniquet (Combat Ready Clamp or SAM Junctional Tourniquet) to the groin', isCorrect: false },
    { id: 'B', text: 'Apply direct pressure with hemostatic gauze to the groin wound while maintaining the limb tourniquet, then proceed to OR for vascular control', isCorrect: true },
    { id: 'C', text: 'Place a second standard tourniquet as high as possible on the proximal thigh to control junctional bleeding', isCorrect: false },
    { id: 'D', text: 'Immediately remove the limb tourniquet to restore distal perfusion before addressing the junctional injury', isCorrect: false },
    { id: 'E', text: 'Perform resuscitative endovascular balloon occlusion of the aorta (REBOA) in zone III before tourniquet removal', isCorrect: false }
  ],
  explanation: `**Correct Answer: Apply direct pressure with hemostatic gauze while maintaining limb tourniquet, then proceed to OR**

This case illustrates critical principles of **Tactical Combat Casualty Care (TCCC)** for combined extremity and junctional hemorrhage.

**Clinical Pathophysiology:**

**Junctional Hemorrhage:**
Junctional zones (groin, axilla, neck) are anatomically challenging areas where standard extremity tourniquets cannot be applied. These injuries account for significant preventable battlefield mortality.

**Tourniquet Conversion:**
Key principles include:
- **Never remove a functioning tourniquet** until prepared for immediate surgical control.
- **Maintain tourniquet** until proximal vascular control is achieved.

**Junctional Hemorrhage Control Options:**
1. **Hemostatic dressings with direct pressure**: First-line in field (Combat Gauze, Celox, etc.). Requires sustained direct pressure (min 3 mins).
2. **Junctional tourniquets**: Specialized devices like Combat Ready Clamp (CRoC) or SAM Junctional Tourniquet (SJT).
3. **Surgical control**: Definitive vascular repair or ligation.

**Correct approach for this patient:**
- **Maintain limb tourniquet**: Removing it would cause massive hemorrhage from the amputation site.
- **Apply hemostatic gauze with direct pressure** to groin: Immediate temporizing measure.
- **Rapid transport to OR**: Definitive vascular control required.

**Why Other Options are Incorrect:**
**A (Remove limb tourniquet)**: Removing the functioning limb tourniquet would cause immediate massive hemorrhage from the amputation site.
**C (Standard tourniquet on thigh)**: Standard tourniquets are ineffective for junctional injuries because they cannot compress the femoral vessels against bone in the femoral triangle.
**D (Restore perfusion)**: Perfusion restoration is not a priority compared to hemorrhage control in a non-viable limb (traumatic amputation).
**E (REBOA)**: While effective, immediate direct pressure with hemostatic gauze is faster and more practical in this scenario.`,
  references: ['Journal of Trauma and Acute Care Surgery (2019)', 'Journal of Trauma and Acute Care Surgery (2020)', 'New England Journal of Medicine (2019)', 'Lancet (2015)', 'Journal of Trauma and Acute Care Surgery (2024)']
};

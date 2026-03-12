export interface DiagramNode {
  label: string;
  value?: string;
  children?: DiagramNode[];
}

export interface DiagramRecord {
  id: string;
  number: string;
  caption: string;
  altText: string;
  textEquivalent: string;
  root: DiagramNode;
}

export const diagramManifest: DiagramRecord[] = [
  {
    id: "chao6,1",
    number: "1",
    caption: "Total body water distribution",
    altText:
      "Tree diagram showing total body water split into extracellular fluid at 45 percent and intracellular fluid at 55 percent. Extracellular fluid divides into sequestered fluid at 17.5 percent and functional extracellular fluid at 27.5 percent. Sequestered fluid includes bones and dense connective tissue at 15 percent and transcellular fluid at 2.5 percent. Functional extracellular fluid includes intravascular fluid at 7.5 percent and interstitial fluid at 20 percent. Intravascular fluid divides into plasma at 5.5 percent and subglycocalyx fluid at 2 percent.",
    textEquivalent:
      "Total body water is divided into two main compartments: extracellular fluid, which accounts for 45%, and intracellular fluid, which accounts for 55%. The extracellular compartment is further divided into sequestered fluid, which makes up 17.5%, and functional extracellular fluid, which makes up 27.5%. Sequestered fluid consists of water in bones and dense connective tissue at 15%, and transcellular fluid at 2.5%. Functional extracellular fluid is divided into intravascular fluid at 7.5% and interstitial fluid at 20%. The intravascular compartment is further divided into plasma at 5.5% and subglycocalyx fluid at 2%.",
    root: {
      label: "Total body water",
      children: [
        {
          label: "Extracellular fluid",
          value: "45%",
          children: [
            {
              label: "Sequestered",
              value: "17.5%",
              children: [
                {
                  label: "Bones and dense connective tissue",
                  value: "15%",
                },
                {
                  label: "Transcellular",
                  value: "2.5%",
                },
              ],
            },
            {
              label: "Functional ECF",
              value: "27.5%",
              children: [
                {
                  label: "Intravascular",
                  value: "7.5%",
                  children: [
                    {
                      label: "Plasma",
                      value: "5.5%",
                    },
                    {
                      label: "Subglycocalyx",
                      value: "2%",
                    },
                  ],
                },
                {
                  label: "Interstitial",
                  value: "20%",
                },
              ],
            },
          ],
        },
        {
          label: "Intracellular",
          value: "55%",
        },
      ],
    },
  },
];

export function getDiagramById(id: string): DiagramRecord | undefined {
  return diagramManifest.find((diagram) => diagram.id === id);
}

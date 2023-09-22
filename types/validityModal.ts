export interface ValidityModalProps {
  selectedAnswer: string;
  translationsLength: number;
  options: string[];
  correctAnswer: string;
  setMappingId: (mappingId: number) => void;
  mappingId: number;
  setValidator: (validator: boolean) => void;
  setChangeBtnText: (btnText: boolean) => void;
  setButtonParams: (btnParms: string) => void;
  reloadTranslations: () => void;
}
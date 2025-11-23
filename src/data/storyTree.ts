import { StoryNode } from "@/data/storyNode";
import { marcapassoNodes } from "@/data/scenarios/marcaPasso";
import { appsMenstruaisNodes } from "@/data/scenarios/appMenst";

// Aqui nós combinamos todos os "pedaços" em um único objeto mestre
// usando o spread operator (...)
export const storyNodes: Record<string, StoryNode> = {
  ...marcapassoNodes,
  ...appsMenstruaisNodes,

  // Futuramente, você só precisa importar e adicionar novos cenários aqui:
  // ...algoritmoViesNodes,
  // ...reconhecimentoFacialNodes,
};

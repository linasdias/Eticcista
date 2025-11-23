import { useState } from "react";
import { storyNodes } from "@/data/storyTree";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useGameEngine = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");
  const [history, setHistory] = useState<string[]>([]);
  const [scores, setScores] = useState({ ethics: 0, tech: 0, social: 0 });
  const [isGameOver, setIsGameOver] = useState(false);

  const currentNode = storyNodes[currentNodeId];

  const handleChoice = async (choiceId: string) => {
    const choice = currentNode.choices?.find((c) => c.id === choiceId);
    if (!choice) return;

    // 1. Atualizar Pontuação
    setScores((prev) => ({
      ethics: prev.ethics + choice.impact.ethics,
      tech: prev.tech + choice.impact.tech,
      social: prev.social + choice.impact.social,
    }));

    // 2. Feedback Imediato (RF06)
    toast({
      title: "Feedback do Sistema",
      description: choice.feedback,
      duration: 5000,
    });

    // 3. Persistência no Banco (RF05) - Fire and forget
    const profileId = localStorage.getItem("user_profile_id");
    if (profileId) {
      await supabase.from("decision_logs").insert({
        profile_id: profileId,
        node_id: currentNodeId,
        choice_id: choiceId,
        impact_ethics: choice.impact.ethics,
      });
    }

    // 4. Navegação (RF03)
    if (storyNodes[choice.nextNodeId].type === "ending") {
      setIsGameOver(true);
    }
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(choice.nextNodeId);
  };

  return { currentNode, handleChoice, scores, isGameOver };
};

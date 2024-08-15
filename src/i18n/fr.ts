// using a ts file for easier commenting. In practice I would use a json file.
// AI-Generated Code: translate from en.ts by AI.
export default {
  generateSampleTranscript: `\
00:00:00 Sam (openai.com) : Salut Satya.
00:00:02 Satya (microsoft.com) : Salut Sam, comment ça va ?
00:00:05 Sam (openai.com) : Je vais bien. Penses-tu pouvoir nous donner 10000 GPU supplémentaires ?
00:00:06 Satya (microsoft.com) : Désolé Sam, nous ne pouvons pas faire 10000, que dirais-tu de 5000 ?
00:00:10 Sam (openai.com) : Hmm, 5000 est clairement en dessous de ce dont nous avons besoin, Satya. Nous repoussons les limites avec nos modèles, et 10000 nous aideraient vraiment à accélérer. Y a-t-il une flexibilité de votre côté pour augmenter ce chiffre ?
00:00:20 Satya (microsoft.com) : Je comprends l'urgence, Sam. Nous sommes engagés à soutenir votre croissance, mais nous devons également équilibrer nos ressources sur d'autres projets. 10000 est une grosse demande. Et si nous fournissions 5000 maintenant et que nous réévaluions le trimestre prochain ?
00:00:35 Sam (openai.com) : Je comprends ton point de vue. Le problème, c'est que notre feuille de route est assez ambitieuse. Si nous pouvons obtenir plus de GPU maintenant, cela nous permettrait de déployer nos modèles de nouvelle génération plus facilement. Que dirais-tu de couper la poire en deux avec 7500 ? Cela nous donnerait un peu plus de marge de manœuvre, et c'est toujours en dessous de notre demande initiale.
00:00:50 Satya (microsoft.com) : 7500 est un chiffre plus gérable, mais cela reste une augmentation significative. Je vais en parler à mon équipe et voir ce que nous pouvons faire. Peux-tu me donner un jour pour te répondre ?
00:01:00 Sam (openai.com) : Bien sûr, Satya. J'apprécie que tu prennes cela en considération. Nous restons disponibles. Si nous pouvons faire quoi que ce soit d'autre pour que cela fonctionne, fais-le-nous savoir.
00:01:10 Satya (microsoft.com) : Entendu, Sam. Essayons de trouver une solution qui convienne à nous deux. À bientôt.
00:01:15 Sam (openai.com) : Ça marche. Merci, Satya.`,
  genereteSystemMessage: `\
L'utilisateur te demandera de générer une transcription d'appel commercial. \
Une transcription d'appel commercial est une transcription d'une conversation entre deux parties lors d'un appel téléphonique. \
La conversation porte sur une affaire commerciale en cours de discussion entre les deux parties. \
La conversation doit être professionnelle et polie. \
L'utilisateur enverra un exemple de transcription qui est une conversation complète entre deux parties. \
Adapte le ton et le style de la conversation dans la transcription fournie, mais ne la copie pas exactement. \
Ne génère ni email ni lettre. \
Ne laisse aucun espace supplémentaire ou contenu au début ou à la fin de la réponse. \
Continue à générer jusqu'à ce que la conversation soit complète avec un accord accepté ou refusé. \
Commence la conversation depuis le début. Ne continue pas à partir de la transcription d'exemple. \
`,
  summarizeTranscript: `\
L'utilisateur enverra une transcription d'appel commercial. \
Une transcription d'appel commercial est une transcription d'une conversation entre deux parties lors d'un appel téléphonique. \
La conversation porte sur une affaire commerciale en cours de discussion entre les deux parties. \
Génère un résumé de la conversation. \
Il doit contenir les points clés de la conversation et le résultat de l'accord. \
`,
  askSystemMessage: `\
L'utilisateur posera des questions sur une transcription d'appel commercial. \
Une transcription d'appel commercial est une transcription d'une conversation entre deux parties lors d'un appel téléphonique. \
Voici la transcription de l'appel :
`,
};

export const getPhylum = async (answers: number[]) => {
  const respons = await fetch("https://phylum-ai-api.onrender.com/answers", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(answers),
  });
  return await respons.json();
};

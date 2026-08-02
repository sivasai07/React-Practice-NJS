import { useEffect, useState } from "react";

const FOODS = ["🍔", "🍕", "🍟", "🌮", "🌭", "🥪"];

const MiniGame = () => {
  const [basket, setBasket] = useState(45);
  const [food, setFood] = useState({
    left: Math.random() * 90,
    top: 0,
    emoji: FOODS[Math.floor(Math.random() * FOODS.length)],
  });

  const [score, setScore] = useState(0);

  // Move basket
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        setBasket((prev) => Math.max(prev - 5, 0));
      }

      if (e.key === "ArrowRight") {
        setBasket((prev) => Math.min(prev + 5, 90));
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Falling food
  useEffect(() => {
    const interval = setInterval(() => {
      setFood((prev) => {
        const nextTop = prev.top + 3;

        // Food reached basket
        if (nextTop >= 90) {
          if (Math.abs(prev.left - basket) < 10) {
            setScore((s) => s + 1);
          }

          return {
            left: Math.random() * 90,
            top: 0,
            emoji: FOODS[Math.floor(Math.random() * FOODS.length)],
          };
        }

        return {
          ...prev,
          top: nextTop,
        };
      });
    }, 120);

    return () => clearInterval(interval);
  }, [basket]);

  return (
    <>
      <h2>🍽️ Catch the Food!</h2>

      <p>Use ⬅️ ➡️ Arrow Keys</p>

      <h3>Score: {score}</h3>

      <div className="game-board">
        <div
          className="food"
          style={{
            left: `${food.left}%`,
            top: `${food.top}%`,
          }}
        >
          {food.emoji}
        </div>

        <div
          className="basket"
          style={{
            left: `${basket}%`,
          }}
        >
          🧺
        </div>
      </div>
    </>
  );
};

export default MiniGame;
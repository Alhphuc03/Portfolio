import { useEffect, useRef } from "react";

function MeteorShower() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let meteors = [];

    const createMeteor = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.2; // Sao băng bắt đầu từ phía trên
      const length = Math.random() * 150 + 100; // Sao băng dài hơn
      const speed = Math.random() * 4; // Tốc độ chậm hơn
      const angle = (Math.random() * Math.PI) / 3 + Math.PI / 6; // Mở rộng góc rơi từ trên xuống
      const life = Math.random() * 100 + 500; // Thời gian sống của sao băng
      const color =
        Math.random() > 0.5 ? "rgba(0, 191, 255, " : "rgba(138, 43, 226, "; // Chọn màu xanh dương nhạt hoặc tím
      meteors.push({ x, y, length, speed, angle, life, color });
    };

    const updateMeteors = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      meteors.forEach((meteor, index) => {
        meteor.x += meteor.speed * Math.cos(meteor.angle);
        meteor.y += meteor.speed * Math.sin(meteor.angle);
        meteor.life -= 1;

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - meteor.length * Math.cos(meteor.angle),
          meteor.y - meteor.length * Math.sin(meteor.angle)
        );

        // Tạo gradient cho sao băng
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.length * Math.cos(meteor.angle),
          meteor.y - meteor.length * Math.sin(meteor.angle)
        );
        gradient.addColorStop(
          0,
          `${meteor.color}${Math.max(meteor.life / 100, 0)})`
        ); // Màu xanh dương nhạt hoặc tím
        gradient.addColorStop(1, `${meteor.color}0)`); // Màu trong suốt ở cuối

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2; // Độ dày của sao băng
        ctx.stroke();

        // Sao băng sẽ biến mất nếu hết thời gian sống hoặc rơi ra khỏi màn hình
        if (
          meteor.life <= 0 ||
          meteor.x > canvas.width ||
          meteor.y > canvas.height
        ) {
          meteors.splice(index, 1);
        }
      });
    };

    const animate = () => {
      updateMeteors();
      if (meteors.length < 40) {
        // Giới hạn số sao băng trên màn hình
        createMeteor();
      }
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
}

export default MeteorShower;

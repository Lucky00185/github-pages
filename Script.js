// Function to change the background color of the body when the button is clicked
document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#F4F4F4", "#FFC300", // Basic colors
        "#8E44AD", "#3498DB", "#E74C3C", "#2ECC71", "#F39C12", // Vibrant colors
        "#D35400", "#1ABC9C", "#C0392B", "#7D3C98", "#2980B9", // Deep tones
        "#FFB6C1", "#FFD700", "#FF69B4", "#40E0D0", "#9370DB", // Pastel tones
        "#B0E57C", "#FF4500", "#DC143C", "#00CED1", "#ADFF2F", // Unique shades
        "#6A5ACD", "#FF6347", "#4682B4", "#DDA0DD", "#B22222"  // Soft & bold mix
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
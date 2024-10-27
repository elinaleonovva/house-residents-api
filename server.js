const PORT = process.env.PORT || 3000; // Render автоматически задаст PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

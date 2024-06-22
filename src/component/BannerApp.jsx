import '../css/bannerapp.css';

export default function BannerApp({category}) {
  function formatCategory(category) {
    return category
      .split('-') // Split by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join the words with spaces
  }

  const formattedCategory = formatCategory(category);

  return (
    <section className="d-flex w-100 justify-content-between align-items-center" style={{ padding: '20px 100px' }}>
      <div className="titletextbanapp">
        <h1 style={{ color: '#1f79e5', fontSize: '50px', fontWeight: 'bold' }}>{formattedCategory}</h1>
        <p style={{ fontSize: '24px', color: '#7e7e7e' }}>
          Temukan berbagai ide proyek {formattedCategory} yang dapat menginspirasimu
        </p>
      </div>
      <img style={{ width: '313px', height: '313px' }} src="../assets/kategori-app/bannerapp.png" />
    </section>
  );
}

const Mapa = () => {
    return (
        <div className="w-full h-[400px]">
        <iframe
          title="Ubicación Aqualandia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9947984816575!2d-58.38414528477051!3d-34.630761466816434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb29614dbd0d%3A0xb21bb7ecf4a00f18!2sUADE!5e0!3m2!1ses-419!2sar!4v1718838379980!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>
    );
  };
  
  export default Mapa;
  
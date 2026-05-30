const StyleGuide = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#1A0E25", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }}>

      {/* Colours */}
      <section style={{ marginBottom: "3rem" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#70F3FF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Colour Palette</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { name: "Surface Base", hex: "#1A0E25", role: "Page background" },
            { name: "Surface Card", hex: "#22162E", role: "Cards & sections" },
            { name: "Surface Raised", hex: "#2A1B38", role: "Elevated elements" },
            { name: "Primary", hex: "#BF94FF", role: "Headlines & active states" },
            { name: "Secondary", hex: "#70F3FF", role: "Highlights & CTAs" },
            { name: "Tertiary", hex: "#FF94B4", role: "Accents & decoration" },
          ].map((swatch) => (
            <div key={swatch.hex} style={{ background: "#22162E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1rem", minWidth: "140px" }}>
              <div style={{ background: swatch.hex, height: "36px", borderRadius: "6px", marginBottom: "8px", border: "1px solid rgba(255,255,255,0.08)" }} />
              <p style={{ color: "#fff", fontSize: "12px", fontWeight: 500, margin: "0 0 2px" }}>{swatch.name}</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", margin: "0 0 2px" }}>{swatch.hex}</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 }}>{swatch.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section style={{ marginBottom: "3rem" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#70F3FF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Typography</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ background: "#22162E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1.25rem" }}>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "0 0 8px" }}>Plus Jakarta Sans — Headline</p>
            <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "28px", fontWeight: 700, color: "#fff", margin: 0 }}>The Sonic Alchemist</p>
          </div>
          <div style={{ background: "#22162E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1.25rem" }}>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "0 0 8px" }}>Manrope — Body</p>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: 0 }}>From the shadows of neon-lit undergrounds to the stardust of global arenas.</p>
          </div>
          <div style={{ background: "#22162E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1.25rem" }}>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "0 0 8px" }}>JetBrains Mono — Label / Caption</p>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "#70F3FF", letterSpacing: "0.06em", margin: 0 }}>NOW PLAYING · IDENTITY & EVOLUTION · TOUR DATES</p>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section style={{ marginBottom: "3rem" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#70F3FF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Gradients & Effects</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { name: "Iridescent", style: "linear-gradient(135deg, #BF94FF, #70F3FF)", role: "CTAs & cassette label" },
            { name: "Glassmorphism", style: "rgba(255,255,255,0.05)", role: "Nav & player" },
            { name: "Section Glow", style: "radial-gradient(circle, rgba(191,148,255,0.18), transparent)", role: "Title halos" },
          ].map((grad) => (
            <div key={grad.name} style={{ flex: 1, minWidth: "160px" }}>
              <div style={{ background: grad.style, height: "56px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "8px" }} />
              <p style={{ color: "#fff", fontSize: "12px", fontWeight: 500, margin: "0 0 2px" }}>{grad.name}</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 }}>{grad.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#70F3FF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Spacing Scale</p>
        <div style={{ background: "#22162E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "12px" }}>
          {[4, 8, 16, 24, 32, 48, 64, 96].map((size, i) => (
            <div key={size} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0, width: "80px" }}>--space-{i + 1}</p>
              <div style={{ background: "#BF94FF", height: "8px", borderRadius: "4px", width: `${size}px` }} />
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>{size}px</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default StyleGuide
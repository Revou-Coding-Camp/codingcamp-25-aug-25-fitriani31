document.addEventListener("DOMContentLoaded", () => {
  const welcomeEl = document.getElementById("welcome");
  const namaPrompt = prompt("Masukkan nama Anda:");
  if (namaPrompt && welcomeEl) {
    welcomeEl.innerText = `Hi ${namaPrompt}, Welcome To Website`;
  } else if (!welcomeEl) {
    console.warn('Element #welcome tidak ditemukan di HTML.');
  }

  const form = document.getElementById("contactForm");
  const box = document.querySelector(".box");

  if (!form) {
    console.error('Form dengan id "contactForm" tidak ditemukan. Periksa id di HTML.');
    return; 
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama")?.value.trim();
    const tgl = document.getElementById("tgl")?.value;
    const jkChecked = form.querySelector("input[name='jk']:checked");
    const jk = jkChecked ? jkChecked.value : "";
    const pesan = document.getElementById("pesan")?.value.trim();

    if (!nama || !tgl || !jk || !pesan) {
      alert("Semua field wajib diisi!");
      return;
    }

    const html = `
      <h5><b>Nama:</b> ${nama}</h5>
      <h5><b>Tanggal Lahir:</b> ${tgl}</h5>
      <h5><b>Jenis Kelamin:</b> ${jk}</h5>
      <h5><b>Pesan:</b> ${pesan}</h5>
    `;

    if (box) {
      box.innerHTML = html;
    } else {
      alert(`Hasil:\nNama: ${nama}\nTanggal: ${tgl}\nJenis Kelamin: ${jk}\nPesan: ${pesan}`);
    }
  });
});

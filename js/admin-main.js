// Requirements For The Energy Progress Card Animation
let energyProgressBar = document.querySelector(
    ".full-purple .circular-progress"
  );
  let energyProgressNumber = document.querySelector(
    ".full-purple .progress-number"
  );
  let revenueDisplay = document.querySelector(".full-purple .progress-number");
  let revenueAmount = 50000000; // Doanh thu thực tế tháng này
  revenueDisplay.innerHTML = `${revenueAmount.toLocaleString()} Đ`;
  
  // Sản phẩm đã bán
  let salesDisplay = document.querySelector(".pink .progress-number");
  let salesCount = 80; // Số lượng sản phẩm đã bán
  salesDisplay.innerHTML = `${salesCount} sản phẩm`;
  
  // Tỉ lệ tồn kho
  let inventoryDisplay = document.querySelector(".purple .progress-number");
  let inventoryCount = 200; // Số lượng tồn kho
  let inventoryPercentage = 40; // Phần trăm tồn kho
  inventoryDisplay.innerHTML = `${inventoryCount} sản phẩm `;
  
  // Khách hàng mới
  let newCustomerDisplay = document.querySelector(".yellow .progress-number");
  let newCustomerCount = 30; // Số lượng khách hàng mới
  newCustomerDisplay.innerHTML = `${newCustomerCount} khách`;
  
  let speed = 20; // Speed Of The Percentage Animation
  
  let energyProgress = setInterval(() => {
    energyValue++;
    energyProgressNumber.innerHTML = `${energyValue}%`;
    energyIndicator.style.transform = `rotate(${energyValue * 2.7}deg)`;
    energyProgressBar.style.background = `conic-gradient(
      white ${energyValue * 2.7}deg,
      #b37efc ${energyValue * 2.7}deg 270deg,
      #A162F7 270deg 360deg
      )`;
    if (energyValue === energyEndValue) clearInterval(energyProgress);
  }, speed);
  
  let rangeProgress = setInterval(() => {
    rangeValue++;
    rangeProgressNumber.innerHTML = `${rangeValue + 105}k%`;
    rangeIndicator.style.transform = `rotate(${rangeValue * 2.7}deg)`;
    rangeProgressBar.style.background = `conic-gradient(
      #FF7E86 ${rangeValue * 2.7}deg,
      #F4F5F9 ${rangeValue * 2.7}deg 270deg,
      white 270deg 360deg
      )`;
    if (rangeValue === rangeEndValue) clearInterval(rangeProgress);
  }, speed);
  
  let brFluidProgress = setInterval(() => {
    brFluidValue++;
    brFluidProgressNumber.innerHTML = `${brFluidValue}%`;
    brFluidIndicator.style.transform = `rotate(${brFluidValue * 2.7}deg)`;
    brFluidProgressBar.style.background = `conic-gradient(
      #a162f7 ${brFluidValue * 2.7}deg,
      #F4F5F9 ${brFluidValue * 2.7}deg 270deg,
      white 270deg 360deg
      )`;
    if (brFluidValue === brFluidEndValue) clearInterval(brFluidProgress);
  }, speed);
  
  let tireWearProgress = setInterval(() => {
    tireWearValue++;
    tireWearProgressNumber.innerHTML = `${tireWearValue}%`;
    tireWearIndicator.style.transform = `rotate(${tireWearValue * 2.7}deg)`;
    tireWearProgressBar.style.background = `conic-gradient(
      #f6cc0d ${tireWearValue * 2.7}deg,
      #F4F5F9 ${tireWearValue * 2.7}deg 270deg,
      white 270deg 360deg
      )`;
    if (tireWearValue === tireWearEndValue) clearInterval(tireWearProgress);
  }, speed);
  
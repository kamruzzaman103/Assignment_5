  document.getElementById('donationBtn').addEventListener('click', function() {
        selectButton('donationBtn');
    });

    document.getElementById('historyBtn').addEventListener('click', function() {
        selectButton('historyBtn');
    });
    function selectButton(buttonId) {
        donationBtn.classList.remove('bg-[#b4f461]', 'tex-black');
        donationBtn.classList.add('bg-white', 'text-gray-500');
        
        historyBtn.classList.remove('bg-[#b4f461]', 'tex-black');
        historyBtn.classList.add('bg-white', 'text-gray-500');
        var selectedButton = document.getElementById(buttonId);
        selectedButton.classList.remove('bg-white', 'text-gray-500');
        selectedButton.classList.add('bg-[#b4f461]', 'tex-black');
    }

    
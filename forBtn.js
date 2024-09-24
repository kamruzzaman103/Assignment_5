    // Get both buttons
    // var button1 = document.getElementById('button1');
    // var button2 = document.getElementById('button2');
    document.getElementById('donationBtn').addEventListener('click', function() {
        selectButton('donationBtn');
    });

    document.getElementById('historyBtn').addEventListener('click', function() {
        selectButton('historyBtn');
    });
    function selectButton(buttonId) {
        // Reset both buttons to default state (unselected)
        donationBtn.classList.remove('bg-[#b4f461]', 'tex-black');
        donationBtn.classList.add('bg-white', 'text-gray-500');
        
        historyBtn.classList.remove('bg-[#b4f461]', 'tex-black');
        historyBtn.classList.add('bg-white', 'text-gray-500');

        // Change the clicked button to selected state
        var selectedButton = document.getElementById(buttonId);
        selectedButton.classList.remove('bg-white', 'text-gray-500');
        selectedButton.classList.add('bg-[#b4f461]', 'tex-black');
    }

    // Add event listeners for both buttons
    
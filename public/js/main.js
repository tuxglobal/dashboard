$(document).ready(function() {
    $(".tab-link").click(function() {

        var url = $(this).data('val');

        $(".tab-pane").removeClass("active");
        $("#" + url).addClass("active")

        return false;
    });
});

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'ETH/TNT',
            data: [12, 19, 3, 5, 2, 3, 7, 10, 4, 12, 8, 17],
            borderWidth: 1,
            fill: 'origin',
            borderColor: '#e7b964',
            backgroundColor: '#333333',
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0.4
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
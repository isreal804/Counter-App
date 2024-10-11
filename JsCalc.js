let Count = 0;
        let Count2 = 0;

        function increase(){
            Count += 1;
            document.getElementById('Count').innerText = Count;
        }

        function decrease(){
            Count -= 1;
            document.getElementById('Count').innerText = Count;
        }

        function resetNum(){
            Count= 0;
            document.getElementById('Count').innerText = Count;
        }

        function saveNum(){
            Count2 += Count;
            document.getElementById('Count2').innerText = Count2;
        }
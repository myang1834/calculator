
    const container = document.getElementById('container')
    /*function createGrid(rows, columns){
        let display = document.createElement('div')
        display.classList.add('display')
        display.textContent = 'Display'
        container.appendChild(display)
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                let newDiv = document.createElement('div')
                newDiv.classList.add('grid-item')
                newDiv.textContent = "hi"
                container.appendChild(newDiv)
            }
        }
    }

    createGrid(5,4)
    */

    let result = '';
    let nums = []
    let operation = ''


    Array.from(document.getElementsByClassName('number')).forEach(element => {
        element.addEventListener('click', function(){
            result += element.innerText
            document.getElementById('display').innerText = result
        })    
    });


    document.getElementById('plus_button').addEventListener('click', function(){
        nums.push(result)  
        console.log(nums)
        result = '' 
        operation = 'plus'
    })

    document.getElementById('times_button').addEventListener('click', function(){
        nums.push(result)  
        console.log(nums)
        result = '' 
        operation = 'times'
    })

    document.getElementById('divide_button').addEventListener('click', function(){
        nums.push(result)  
        console.log(nums)
        result = '' 
        operation = 'divide'
    })
    document.getElementById('minus_button').addEventListener('click', function(){
        nums.push(result)  
        console.log(nums)
        result = '' 
        operation = 'minus'
    })




    document.getElementById('equals_button').addEventListener('click', function(){
        nums.push(result)
        console.log(nums)
        if(operation === 'plus'){
            console.log(parseInt(nums[nums.length-1])+parseInt(nums[nums.length-2]))
            //document.getElementsByClassName('display').innerText = parseInt(nums[nums.length-1])+parseInt(nums[nums.length-2])
            document.getElementById('display').innerText = parseInt(nums[nums.length-1])+parseInt(nums[nums.length-2])
            result = ''
            nums = []
        }else if(operation === 'times'){
            console.log(parseInt(nums[nums.length-1])*parseInt(nums[nums.length-2]))
            //document.getElementsByClassName('display').innerText = parseInt(nums[nums.length-1])+parseInt(nums[nums.length-2])
            document.getElementById('display').innerText = parseInt(nums[nums.length-1])*parseInt(nums[nums.length-2])
            result = ''
            nums = []
        }else if(operation === 'divide'){
            console.log(parseInt(nums[nums.length-2])/parseInt(nums[nums.length-1]))
            //document.getElementsByClassName('display').innerText = parseInt(nums[nums.length-1])+parseInt(nums[nums.length-2])
            document.getElementById('display').innerText = parseInt(nums[nums.length-2])/parseInt(nums[nums.length-1])
            result = ''
            nums = []
        }else if(operation === 'minus'){
            console.log(parseInt(nums[nums.length-2])-parseInt(nums[nums.length-1]))
            //document.getElementsByClassName('display').innerText = parseInt(nums[nums.length-1])+parseInt(nums[nums.length-2])
            document.getElementById('display').innerText = parseInt(nums[nums.length-2])-parseInt(nums[nums.length-1])
            result = ''
            nums = []
        }
        
        
    })


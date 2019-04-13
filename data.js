
candidateScoreList = [
    {
      "name": "Khushroo",
      "totalScore": 49.07142857142857
    },
    {
      "totalScore": 48.214285714285715
    },
    {
      "totalScore": 42.857142857142854
    },
    {
      "totalScore": 19.642857142857142
    },
    {
      "totalScore": 46.42857142857143
    },
    {
      "totalScore": 73.21428571428572
    },
    {
      "totalScore": 85.71428571428572,
    },
    {
      "totalScore": 39.285714285714285
    },
    {
      "totalScore": 14.285714285714285
    },
    {
      "totalScore": 80.35714285714286
    },
    {
      "totalScore": 41.07142857142857,

    },
    {
      "totalScore": 66.07142857142857
    },
    {
      "totalScore": 73.21428571428572
    },
    {
      "totalScore": 85.71428571428572
    },
    {
      "totalScore": 66.07142857142857
    },
    {
      "totalScore": 73.21428571428572
    },
    {
      "totalScore": 39.285714285714285
    },
    {
      "totalScore": 71.42857142857143
    },
    {
      "totalScore": 41.07142857142857
    },
    {
      "totalScore": 71.42857142857143
    },

    {
      "totalScore": 25
    },
    {
      "totalScore": 67.85714285714286
    },
    {
      "totalScore": 53.57142857142857
    },
    {
      "totalScore": 41.07142857142857
    },
    {
      "totalScore": 60.714285714285715
    },
    {
      "totalScore": 85.71428571428572
    },
    {
      "totalScore": 80.35714285714286
    },
    {
      "totalScore": 41.07142857142857
    },
    {
      "totalScore": 78.57142857142857
    },
    {
      "totalScore": 19.642857142857142
    },
    {
      "totalScore": 78.57142857142857
    },
    {
      "totalScore": 33.92857142857143
    },
    {
      "totalScore": 46.42857142857143
    },
    {
      "totalScore": 66.07142857142857
    },
    {
      "totalScore": 46.42857142857143
    },
    {
      "totalScore": 46.42857142857143
    },
    {
      "totalScore": 25
    },
    {
      "totalScore": 53.57142857142857
    },
    {
      "totalScore": 58.92857142857143
    },
    {
      "totalScore": 85.71428571428572
    },
    {
      "totalScore": 95.71428571428572
    },
    
    {
      "totalScore": 5.71428571428572
    }
  ];
  //gets the no of students in the given json data
  
  function getLengthofJson(){
    this.length = this.candidateScoreList.length;
    this.medianNumber = (this.length)/2
    this.processJson();
    this.getMedianofJson();
  }
  
//calculates the median of the students scores in the given json

 function getMedianofJson(){
   this.median=this.data[this.medianNumber]
   //console.log(this.median)
  }

//process the given json data and stores the scores of students in the array data and score of Khushroo's in the variable khus

  function processJson() {
    this.data=[]
    this.bins=Array(11).fill(0)
    this.arr = [];
    for (var i=0;i<11;i++) {
     this.arr[i] = [i*10,0];
  	}
		//  console.log(this.arr)
    for (var i = 0; i < this.candidateScoreList.length; i += 1) {
      this.data[i]=  this.candidateScoreList[i].totalScore;
      if( this.candidateScoreList[i].name=="Khushroo")
      {
      	this.khus= this.candidateScoreList[i].totalScore
      }
  		this.arr[Math.ceil(this.data[i]/10)][1]+=1
    }
    //console.log(this.arr);
 		this.data.sort();
  }
	getLengthofJson()
  //console.log(this.bins,length,this.median);
 	this.median=Math.ceil(this.median)
  this.yeq=((this.arr[Math.ceil(this.median/10)][1]-this.arr[Math.ceil(this.median/10)-1][1])*(this.median-Math.floor(this.median/10)*10))/(Math.ceil(this.median/10)*10-Math.floor(this.median/10)*10)+this.arr[Math.floor(this.median/10)][1]
  
	this.khus=Math.floor(this.khus)
 	//console.log(this.khus)
	this.yeq1=((this.arr[Math.ceil(this.khus/10)][1]-this.arr[Math.floor(this.khus/10)][1])*(this.khus-Math.floor(this.khus/10)*10))/(Math.ceil(this.khus/10)*10-Math.floor(this.khus/10)*10)+this.arr[Math.floor(this.khus/10)][1]
  

	//console.log(this.yeq1)
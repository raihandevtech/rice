const numberWithCommas = (num : number | undefined ) : string => {
    let number = "" ;
        if(num){
          number = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return number;
}
  

export default numberWithCommas;
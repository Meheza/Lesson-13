var data = [
    {[0]:'Brooklyn'},
    {[1]:'400000'},
    {[2]:'64567'}


    // {needloan: 'Home Purchase', purchase: 'Single Family Home'},
    // {needloan: 'Refinance', purchase: 'Townhome'}
]
var homeloan = {}
module.exports = {
    beforeEach: browser => {
        homeloan= browser.page.homeloanpage()
        homeloan
        .navigate()
        
            
            
    },
    after: browser => {
        homeloan
            .end()
    },
    'Home loan test'  : browser => {
        data.forEach(test=>{
            homeloan
            .wizard(test)
        })
    
    
    
    
   }
}


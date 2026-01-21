export async function test(req,res){
    res.status(400).json({
        message:"error message fake"
    })
}
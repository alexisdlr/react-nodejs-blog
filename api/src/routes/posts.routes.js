import { Router } from "express";

const router = Router()

const posts = router.get('/api/posts', (req,res) => {
  res.json('this is post')
})
export default posts;
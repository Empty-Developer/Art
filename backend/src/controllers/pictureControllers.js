import { error } from "node:console";
import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";

const getAllPicture = async (req, res) => {
  try {
    const pictures = await prisma.picture.findMany({
      include: {
        owner: {
          select:{
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    res.status(200).json({
      status: "success",
      results: pictures.length,
      data: {
        pictures,
      },
    })
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    })
  }
}

const createPicture = async (req, res) => {
  try {
    const {title, pictureUrl, price, ownerId} = req.body;

    // check if pictureUrl already exists
    const pictureUrlExist = await prisma.picture.findFirst({
      where: {pictureUrl: pictureUrl}
    })

    if (pictureUrlExist) {
      return res
        .status(400)
        .json({ error: "picture already exists witch this URL"})
    }

    const picturePost = await prisma.picture.create({
      data: {
        title,
        pictureUrl,
        price: Number(price),
        ownerId,
      }
    })

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: picturePost.id,
          title: title,
          pictureUrl: pictureUrl,
          price: price,
        }
      }
    })
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    })
  }
}

const getOnePicture = async (req, res) => {
  try {
    const {id} = req.params
    const pictures = await prisma.picture.findUnique({
      where: {id},
      include: {
        owner: {
          select:{
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    res.status(200).json({
      status: "success",
      data: {
        pictures,
      },
    })
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    })
  }
}

export { createPicture, getAllPicture, getOnePicture};
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = async (req: Request) => {
  // Fake auth function for example purposes
  return { id: "fakeId" }; // Replace with real authentication logic
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter: FileRouter = {
  categoryImageUploader: f({
    image: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),

  bannerImageUploader: f({
    image: {
      maxFileSize: "1MB", // Adjust file size limit for banners if needed
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      // Authentication logic
      const user = await auth(req);

      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Banner upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
      return { uploadedBy: metadata.userId };
    }),
    marketLogoUploader: f({
      image: {
        maxFileSize: "1MB", // Adjust file size limit for banners if needed
        maxFileCount: 1,
      },
    })
      .middleware(async ({ req }) => {
        // Authentication logic
        const user = await auth(req);
  
        if (!user) throw new UploadThingError("Unauthorized");
        return { userId: user.id };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        console.log("market logo upload complete for userId:", metadata.userId);
        console.log("File URL:", file.url);
        return { uploadedBy: metadata.userId };
      }),
      productImageUploader: f({
        image: {
          maxFileSize: "1MB", // Adjust file size limit for banners if needed
          maxFileCount: 1,
        },
      })
        .middleware(async ({ req }) => {
          // Authentication logic
          const user = await auth(req);
    
          if (!user) throw new UploadThingError("Unauthorized");
          return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
          console.log("Banner upload complete for userId:", metadata.userId);
          console.log("File URL:", file.url);
          return { uploadedBy: metadata.userId };
        }),
        trainingImageUploader: f({
          image: {
            maxFileSize: "1MB", // Adjust file size limit for banners if needed
            maxFileCount: 1,
          },
        })
          .middleware(async ({ req }) => {
            // Authentication logic
            const user = await auth(req);
      
            if (!user) throw new UploadThingError("Unauthorized");
            return { userId: user.id };
          })
          .onUploadComplete(async ({ metadata, file }) => {
            console.log("Banner upload complete for userId:", metadata.userId);
            console.log("File URL:", file.url);
            return { uploadedBy: metadata.userId };
          })
};

export type OurFileRouter = typeof ourFileRouter;

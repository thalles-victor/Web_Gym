-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_price" INTEGER NOT NULL,
    "product_images" TEXT[],
    "product_description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_cep" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "installments" INTEGER NOT NULL,
    "freight" INTEGER NOT NULL,
    "paid_in" TIMESTAMP(3) NOT NULL,
    "payment_status" TEXT NOT NULL,
    "registered_in" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");

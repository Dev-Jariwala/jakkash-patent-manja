// BillPDF.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  billContainer: {
    width: "80%",
    margin: "auto",
    height: "100%",
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 0 10px",
  },
  billHead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
  },
  brandName: {
    fontWeight: "900",
    fontSize: 20,
  },
  brandSlogan: {
    fontSize: 10,
    color: "grey",
  },
  billTop: {
    // backgroundColor: "yellowgreen",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    margin: "20px 0",
  },
  billTopRight: {
    width: "35%",
  },
  billDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  fontBold: {
    fontSize: 11,
    fontWeight: "bold",
  },
  fontLight: {
    fontSize: 9,
    fontWeight: "light",
  },
  marbot10: {
    marginBottom: "5px",
  },
  table: {
    display: "flex",
    flexDirection: "column",
  },
  tHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: "4px 0",
  },
  tBody: {
    display: "flex",
    flexDirection: "column",
  },
  tR: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    borderBottom: "1px solid #ccc",
    padding: "4px 0",
  },
  tH: {
    width: "15%",
    textAlign: "center",
  },
  tD: {
    width: "15%",
    textAlign: "center",
  },
});

const BillPDF = ({ bill }) => {
  const {
    BillNo,
    name,
    orderDate,
    mobileNumber,
    address,
    deliveryDate,
    products,
    totalFirki,
    subTotal,
    discount,
    advance,
    totalDue,
  } = bill;

  return (
    <>
      <Document>
        <Page size="A5" style={styles.page}>
          <View style={styles.billContainer}>
            <View>
              <View style={styles.billHead}>
                <View style={styles.brand}>
                  <Text style={styles.brandName}>Jakash</Text>
                  <Text style={styles.brandSlogan}>patent manjo</Text>
                </View>
                <View>
                  <Text>INVOICE</Text>
                </View>
              </View>
              <View style={styles.billTop}>
                <View style={styles.billTopLeft}>
                  <Text style={{ ...styles.fontBold, ...styles.marbot10 }}>
                    Invoice to:
                  </Text>
                  <Text style={{ ...styles.fontBold, ...styles.marbot10 }}>
                    {name}
                  </Text>
                  <Text style={{ ...styles.fontLight, ...styles.marbot10 }}>
                    {address}
                  </Text>
                </View>
                <View style={styles.billTopRight}>
                  <View style={styles.billDetails}>
                    <Text style={styles.fontBold}>Bill No:</Text>
                    <Text style={styles.fontLight}>{BillNo}</Text>
                  </View>
                  <View style={styles.billDetails}>
                    <Text style={styles.fontBold}>Date</Text>
                    {/* <Text style={styles.fontLight}>{orderDate.slice(0, 10)}</Text> */}
                  </View>
                </View>
              </View>
              <View style={styles.table}>
                <View style={styles.tHead}>
                  <Text style={{ ...styles.tH, width: "40%" }}>Item</Text>
                  <Text style={styles.tH}>Quantity</Text>
                  <Text style={styles.tH}>Unit Price</Text>
                  <Text style={styles.tH}>Total</Text>
                </View>
                <View style={styles.tBody}>
                  {products.map((product) => (
                    <View key={product.productId} style={styles.tR}>
                      <Text
                        style={{
                          ...styles.tD,
                          width: "40%",
                          textAlign: "left",
                          paddingLeft: "10px",
                        }}
                      >
                        {product.productName}
                      </Text>
                      <Text style={styles.tD}>{product.quantity}</Text>
                      <Text style={styles.tD}>{product.price}</Text>
                      <Text style={styles.tD}>
                        {product.price * product.quantity}
                      </Text>
                    </View>
                  ))}
                  {discount > 0 && (
                    <View style={styles.tR}>
                      <Text
                        style={{
                          ...styles.tD,
                          width: "40%",
                          textAlign: "left",
                          paddingLeft: "10px",
                        }}
                      ></Text>
                      <Text style={styles.tD}></Text>
                      <Text style={{ ...styles.tD, ...styles.fontBold }}>
                        Discount :
                      </Text>
                      <Text style={{ ...styles.tD, ...styles.fontBold }}>
                        -{discount}
                      </Text>
                    </View>
                  )}
                  <View style={{ ...styles.tR, borderBottom: "none" }}>
                    <Text
                      style={{
                        ...styles.tD,
                        width: "40%",
                        textAlign: "left",
                        paddingLeft: "10px",
                      }}
                    ></Text>
                    <Text style={styles.tD}></Text>
                    <Text style={{ ...styles.tD, ...styles.fontBold }}>
                      Sub Total :
                    </Text>
                    <Text style={{ ...styles.tD, ...styles.fontBold }}>
                      {subTotal}
                    </Text>
                  </View>
                </View>
                <View style={{ ...styles.tR, marginTop: "50px" }}>
                  <Text style={{ ...styles.tD, ...styles.fontBold }}>
                    Advance :
                  </Text>
                  <Text style={{ ...styles.tD, ...styles.fontBold }}>
                    {advance} /-
                  </Text>
                  <Text style={{ ...styles.tD, ...styles.fontBold }}>
                    Total Due:
                  </Text>
                  <Text style={{ ...styles.tD, ...styles.fontBold }}>
                    {totalDue} /-
                  </Text>
                </View>
              </View>
            </View>
            <View style={{}}>
              <View
                style={{
                  ...styles.tR,
                  borderBottom: "none",
                  marginBottom: "5px",
                }}
              >
                <Text
                  style={{
                    ...styles.tD,
                    ...styles.fontBold,
                    width: "50%",
                    textAlign: "left",
                  }}
                >
                  Thank you !
                </Text>

                <Text
                  style={{
                    ...styles.tD,
                    ...styles.fontBold,
                    width: "50%",
                    borderTop: "1px solid #ccc",
                    padding: "10px 0",
                  }}
                >
                  Authorized Sign
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  justifyContent: "center",
                  // backgroundColor: "red",
                  padding: "10px 0",
                  borderBottom: "1px solid #ccc",
                  borderTop: "1px solid #ccc",
                }}
              >
                <View style={{ width: "50%" }}>
                  <Text style={{ ...styles.fontBold, marginBottom: "5px" }}>
                    Mobille :
                  </Text>
                  <Text style={{ ...styles.fontLight }}>
                    9824183096 | 9228467012
                  </Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={{ ...styles.fontBold, marginBottom: "5px" }}>
                    Address:
                  </Text>
                  <Text style={{ ...styles.fontLight }}>
                    40, Ganeshkrupa Soc., Tadwadi, Rander Road, Surat.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default BillPDF;

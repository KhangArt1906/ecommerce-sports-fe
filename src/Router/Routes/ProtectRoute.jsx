import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ route, children }) => {
  const { role, userInformation } = useSelector((state) => state.auth);

  // feat(add): code lo
  // Nếu có vai trò (role)
  if (role) {
    // Nếu route yêu cầu vai trò
    if (route.role) {
      // Nếu có thông tin người dùng
      if (userInformation) {
        // Kiểm tra vai trò của người dùng
        if (userInformation.role === route.role) {
          // Kiểm tra trạng thái người dùng
          if (route.status) {
            if (route.status === userInformation.status) {
              return <Suspense fallback={null}>{children}</Suspense>;
            } else {
              if (userInformation.status === "pending") {
                return <Navigate to="/provider/account-pending" replace />;
              } else {
                return <Navigate to="/provider/account-deactive" replace />;
              }
            }
          } else {
            // Nếu không cần kiểm tra trạng thái
            return <Suspense fallback={null}>{children}</Suspense>;
          }
        } else {
          // Nếu vai trò không khớp
          if (route.visibility) {
            if (route.visibility.some((i) => i === userInformation.status)) {
              return <Suspense fallback={null}>{children}</Suspense>;
            } else {
              return <Navigate to="/provider/account-pending" replace />;
            }
          } else {
            return <Suspense fallback={null}>{children}</Suspense>;
          }
        }
      } else {
        // Nếu không có thông tin người dùng
        return <Navigate to="/unauthorized" replace />;
      }
    } else {
      // Nếu không yêu cầu vai trò nhưng cần quyền admin
      if (route.ability === "admin") {
        return <Suspense fallback={null}>{children}</Suspense>;
      } else {
        return <Navigate to="/unauthorized" replace />;
      }
    }
  } else {
    // Nếu không có vai trò
    return <Navigate to="/login" replace />;
  }
};

export default ProtectRoute;

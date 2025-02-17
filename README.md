<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 17 2025 01:30:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 48256.8    | 20.25        | 8.61          |
| polka                    | 0.5.2    | ✓      | 46614.4    | 20.98        | 8.31          |
| kita                     | 1.1.36   | ✓      | 46599.2    | 20.96        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46561.8    | 20.97        | 8.30          |
| fastify                  | 4.29.0   | ✓      | 46436.8    | 21.03        | 8.33          |
| polkadot                 | 1.0.0    | ✗      | 46318.4    | 21.09        | 8.26          |
| server-base              | 7.1.32   | ✗      | 46019.2    | 21.21        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45579.2    | 21.43        | 8.13          |
| server-base-router       | 7.1.32   | ✓      | 45344.8    | 21.55        | 8.09          |
| 0http                    | 3.5.3    | ✓      | 44631.2    | 21.91        | 7.96          |
| h3                       | 1.15.0   | ✗      | 44422.4    | 22.01        | 7.92          |
| connect-router           | 1.3.8    | ✓      | 43583.2    | 22.44        | 7.77          |
| h3-router                | 1.15.0   | ✓      | 41680.0    | 23.50        | 7.43          |
| hono                     | 4.7.1    | ✓      | 40914.4    | 23.94        | 6.71          |
| restana                  | 4.9.9    | ✓      | 38352.2    | 25.58        | 6.84          |
| koa                      | 2.15.4   | ✗      | 37758.4    | 25.98        | 6.73          |
| take-five                | 2.0.0    | ✓      | 35349.4    | 27.77        | 12.71         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35016.4    | 28.06        | 6.24          |
| restify                  | 11.1.0   | ✓      | 34874.2    | 28.16        | 6.29          |
| koa-router               | 12.0.1   | ✓      | 33763.8    | 29.12        | 6.02          |
| hapi                     | 21.3.12  | ✓      | 31543.0    | 31.19        | 5.63          |
| fastify-big-json         | 4.29.0   | ✓      | 11923.4    | 83.32        | 137.19        |
| express                  | 4.21.2   | ✓      | 10986.6    | 90.43        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10292.1    | 96.57        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |

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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jul 07 2025 01:41:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 47620.8    | 20.50        | 8.49          |
| connect                  | 3.7.0    | ✗      | 46934.4    | 20.80        | 8.37          |
| kita                     | 1.1.36   | ✓      | 46671.2    | 20.92        | 8.37          |
| polka                    | 0.5.2    | ✓      | 46661.6    | 20.93        | 8.32          |
| fastify                  | 4.29.1   | ✓      | 46504.8    | 21.01        | 8.34          |
| server-base-router       | 7.1.32   | ✓      | 46088.0    | 21.19        | 8.22          |
| rayo                     | 1.4.6    | ✓      | 45519.2    | 21.47        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45416.8    | 21.52        | 8.10          |
| 0http                    | 3.5.3    | ✓      | 44622.4    | 21.91        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 43813.6    | 22.34        | 7.81          |
| connect-router           | 1.3.8    | ✓      | 43481.6    | 22.50        | 7.75          |
| h3                       | 1.15.3   | ✗      | 41192.8    | 23.78        | 7.35          |
| h3-router                | 1.15.3   | ✓      | 40897.6    | 23.96        | 7.29          |
| restana                  | 4.9.9    | ✓      | 38536.8    | 25.45        | 6.87          |
| koa                      | 2.16.1   | ✗      | 36832.6    | 26.64        | 6.57          |
| hono                     | 4.8.4    | ✓      | 36801.4    | 26.67        | 6.04          |
| restify                  | 11.1.0   | ✓      | 35219.4    | 27.90        | 6.35          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34907.0    | 28.15        | 6.22          |
| take-five                | 2.0.0    | ✓      | 34798.6    | 28.23        | 12.51         |
| koa-router               | 12.0.1   | ✓      | 33009.8    | 29.79        | 5.89          |
| hapi                     | 21.4.0   | ✓      | 31447.4    | 31.29        | 5.61          |
| fastify-big-json         | 4.29.1   | ✓      | 11930.2    | 83.26        | 137.26        |
| express                  | 4.21.2   | ✓      | 11214.0    | 88.58        | 2.00          |
| express-with-middlewares | 4.21.2   | ✓      | 10180.0    | 97.64        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
